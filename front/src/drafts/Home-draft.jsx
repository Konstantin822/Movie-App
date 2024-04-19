// import { useQuery, gql } from "@apollo/client";

// const GET_INFO = gql`
// query GetHome {
//     homeDataApis {
//       data {
//         id
//         attributes {
//           name
//           rating
//           time
//           desc
//           starring
//           genre
//           tags
//           img {
//             data {
//               attributes {
//                 url
//               }
//             }
//           }
//           cover {
//             data {
//               attributes {
//                 url
//               }
//             }
//           }
//           video
//           date
//         }
//       }
//     }
//   }
// `;

// export function Card() {
//     const { loading, error, data } = useQuery(GET_INFO)

//     if (loading) return <p>Loading...</p>
//     if (error) return <p>Error</p>

//     return (
//         <div className="cards__row">
//             {data?.homeDataApis.data.attributes.map((apiData) => (
//                 <div className="cards__row_card">
//                     <h2>{apiData.name}</h2>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export function Card() {
//     const { loading, error, data } = useQuery(GET_INFO)
//     if (loading) return <p>Loading...</p>
//     if (error) return <p>Error</p>

//     return (
//         <div className="cards__row">
//             {data.homeDataApis.data.map((item) => (
//                 item.attributes.img.data && (
//                     <div className="cards__row_card" key={item.id}>
//                         <img src={item.attributes.img.data.attributes.url} />
//                     </div>
//                 )
//             ))}
//         </div>
//     );
// }

// export default function Home() {
//     const { loading, error, data } = useQuery(GET_INFO)
//     console.log(data?.homeDataApis.data.map(item => (
//         item.attributes.name
//     )))

//     return (
//         <>
//             <section className="hero">
//                 <div className="container hero__container">
//                     <div className="hero__card">
//                         <h1 className="hero__card_title">Love, Death, Robots</h1>
//                         <div className="hero__card_info">
//                             <div className="hero__card_info-desc1">
//                                 <p>Rating</p>
//                                 <p>Date</p>
//                                 <p>Time</p>
//                                 <p>Genre</p>
//                             </div>
//                             <div className="hero__card_info-desc2">
//                                 <p>Tags<span></span></p>
//                                 <p>Starring<span></span></p>
//                             </div>
//                             <p className="hero__card_info-desc3">Lorem ipsum dolor sit amet.</p>
//                         </div>
//                         <div className="hero__card_buttons">
//                             <button className="hero__card_buttons-btn">Watch trailer</button>
//                             <button className="hero__card_buttons-btn">Watch now</button>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section className="cards">
//                 <div className="container cards__container">
//                     {/* Тут слайдер */}
//                     <Card />
//                 </div>
//             </section>
//         </>
//     );

// }