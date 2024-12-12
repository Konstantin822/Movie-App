import { gql } from '@apollo/client';

export const GET_COLLECTIONS = gql`
  query GetHomeCollections {
    homeCollections {
      img {
        url
      }
      background {
        url
      }
      title
      type
      rating
      time
      description
      description2
      starring
      genre
      tags
      video
      year
      active
    }
  }
`;