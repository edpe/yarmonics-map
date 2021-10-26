import dynamic from "next/dynamic";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { SpinnerRoundOutlined } from "spinners-react";

import styled from "styled-components";

const CenterInPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

function HomePage({ locations }) {
  const Map = dynamic(() => import("../src/components/Map"), {
    loading: () => (
      <CenterInPage>
        <SpinnerRoundOutlined />
      </CenterInPage>
    ),
    ssr: false,
  });

  return <Map locations={locations} />;
}

export const getStaticProps = async () => {
  const client = new ApolloClient({
    uri: "https://yarmonics-map-cms.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });

  const { data, loading, error } = await client.query({
    query: gql`
      query getLocations {
        locations {
          id
          title
          lat
          long
          performances {
            id
            name
            description
            soundcloudLink
            image {
              url
              previewUrl
              alternativeText
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      locations: data.locations,
    },
  };
};

export default HomePage;
