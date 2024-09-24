import { gql } from '@apollo/client';

export const GET_DATA = gql`
query GetData {
    homeCollections(pagination: {pageSize: 21}) {
      data {
        id
        attributes {
          img {
            data {
              attributes {
                url
              }
            }
          }
          cover {
            data {
              attributes {
                url
              }
            }
          }
          name
          type
          rating
          time
          desc
          desc2
          starring
          genre
          tags
          video
          year
          active
        }
      }
    }
  }
`;