import gql from "graphql-tag";

const LOCATIONS_QUERY = gql`
query Locations {
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
`;

export default POSTS_QUERY;
