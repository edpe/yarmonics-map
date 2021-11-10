import App from "next/app";
import Head from "next/head";
import { createContext } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import "../styles/globalStyles.css";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;

  return (
    <GlobalContext.Provider value={global}>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
        <title>Yarmonics Sound Map</title>
        <meta
          name="description"
          content="This map contains a growing collection of recordings from performances
          at Yarmonics festivals. Each red marker represents a venue or site,
          click that marker to show all recordings from that venue or site."
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp="name" content="Yarmonics Sound Map" />
        <meta
          itemProp="description"
          content="This map contains a growing collection of recordings from performances
          at Yarmonics festivals. Each red marker represents a venue or site,
          click that marker to show all recordings from that venue or site."
        />
        <meta itemProp="image" content="/yarmonics-meta.png" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://yarmonics-map.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Yarmonics Sound Map" />
        <meta
          property="og:description"
          content="This map contains a growing collection of recordings from performances
          at Yarmonics festivals. Each red marker represents a venue or site,
          click that marker to show all recordings from that venue or site."
        />
        <meta property="og:image" content="/yarmonics-meta.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yarmonics Sound Map" />
        <meta
          name="twitter:description"
          content="  This map contains a growing collection of recordings from performances
          at Yarmonics festivals. Each red marker represents a venue or site,
          click that marker to show all recordings from that venue or site."
        />
        <meta name="twitter:image" content="/yarmonics-meta.png" />
      </Head>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
};

MyApp.getStaticProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getStaticProps(ctx);
  const client = new ApolloClient({
    uri: "https://yarmonics-map-cms.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query getGlobal {
        global {
          favicon {
            id
            created_at
            updated_at
            name
            alternativeText
            caption
            width
            height
            formats
            hash
            ext
            mime
            size
            url
            previewUrl
            provider
            provider_metadata
            related {
              __typename
            }
          }
        }
      }
    `,
  });
  return { ...appProps, pageProps: { global: data.global } };
};

export default MyApp;
