import App from "next/app";
import Head from "next/head";
import { createContext } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { createGlobalStyle } from "styled-components";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

// applies flex-grow to map container to fix safari only bug
const GlobalStyle = createGlobalStyle`
  body { 
    margin: 0; 
  }
  
  .leaflet-container {
    flex-grow: 1 !important;
  }
  
`;

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;

  return (
    <>
      <GlobalContext.Provider value={global}>
        <GlobalStyle />
        <Head>
          {/* <link rel="shortcut icon" href={global.favicon.url} /> */}
          <title>Yarmonics Performance Locations</title>
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
            integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
            crossOrigin=""
          />
        </Head>
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
