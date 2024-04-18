import { useQuery, gql } from '@apollo/client';

const GET_DATA = gql`
query GetHome {
    homeDataApis {
      data {
        id
        attributes {
          name
          rating
          time
          desc
          starring
          genre
          tags
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
          video
          date
        }
      }
    }
  }
`;

export default function useHomeData() {
    const { loading, error, data } = useQuery(GET_DATA)

    if (loading) return 'Loading...'
    if (error) return `Error ${error.message}`

    return data
}