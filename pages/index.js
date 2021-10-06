import dynamic from "next/dynamic";
import Head from "next/head";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

function HomePage({ locations }) {
  console.log(locations);
  const Map = dynamic(() => import("../src/components/Map"), {
    loading: () => <p>Loading map</p>,
    ssr: false,
  });

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
      </Head>
      <Map locations={locations} />
    </div>
  );
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
