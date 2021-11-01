import dynamic from "next/dynamic";
import { initializeApp } from "firebase/app";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { SpinnerRoundOutlined } from "spinners-react";

import styled from "styled-components";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2yS1qiHxOvtZ3JHX4q8LmviQbE2CJgKs",
  authDomain: "yarmonics-map.firebaseapp.com",
  projectId: "yarmonics-map",
  storageBucket: "yarmonics-map.appspot.com",
  messagingSenderId: "188355762607",
  appId: "1:188355762607:web:67f9c39ff65efadfbf775a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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

  const { data, error } = await client.query({
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
