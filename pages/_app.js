import App from "next/app";
import Head from "next/head";
import { createContext } from "react";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;

  return (
    <>
      <Head>
        {/* <link rel="shortcut icon" href={global.favicon.url} /> */}
        <title>Yarmonics Performance Locations</title>
      </Head>
      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );
};

MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
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
