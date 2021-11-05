import dynamic from "next/dynamic";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { SpinnerRoundOutlined } from "spinners-react";
import Layout from "../src/components/Layout";

import styles from "../styles/MapPage.module.css";

const MapPage = ({ locations }) => {
  const Map = dynamic(() => import("../src/components/Map"), {
    loading: () => (
      <div className={styles.centerSpinner}>
        <SpinnerRoundOutlined />
      </div>
    ),
    ssr: false,
  });

  return (
    <Layout>
      <Map locations={locations} />
    </Layout>
  );
};

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

export default MapPage;
