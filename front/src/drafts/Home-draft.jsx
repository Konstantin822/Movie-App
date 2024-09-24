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


// Lates draft
// import React, { useState, useEffect } from "react";
// import { homeData } from "../../data/homeData.js";
// import { useQuery } from "@apollo/client";

// import Carousel from '../../components/Carousel/Carousel.jsx';
// import Frame from '../../components/Frame/Frame.jsx';

// import { GET_DATA } from "../../data/homeCollections.jsx";

// export default function Home() {
//     const { loading, error, data } = useQuery(GET_DATA)
//     const [info, setInfo] = useState([])
//     const [frame, setFrame] = useState(false)

//     useEffect(() => {
//         setInfo(homeData.cards)
//     }, [])

//     useEffect(() => {
//         if (data) {
//             const formattedData = data.homeCollections.data.map(item => ({
//                 id: item.id,
//                 ...item.attributes,
//                 img: `http://localhost:1338${item.attributes.img.data.attributes.url}`,
//                 cover: `http://localhost:1338${item.attributes.cover.data.attributes.url}`,
//                 tags: item.attributes.tags,
//             }))
//             setInfo(formattedData)
//         }
//     }, [data])

//     if (loading) return <p>Loading...</p>
//     if (error) return <p>Error: {error.message}</p>

//     const cardChange = id => {
//         const newInfo = info.map(item => {
//             item.active = false

//             if (item.id === id) {
//                 item.active = true
//             }
//             return item
//         })
//         setInfo(newInfo)
//     }

//     const cardChange = id => {
//         setInfo(info.map(item => ({
//             ...item,
//             active: item.id === id
//         })))
//     }

//     const toggleFrame = () => {
//         setFrame(!frame)
//     }

//     return (
//         <>
//             <section className="hero">
//                 {info && info.length > 0 && info.map(item => (
//                     <div className="container hero__container" key={item.id}>
//                         <img
//                             className={`hero__bg ${item.active ? 'active' : undefined}`}
//                             src={item.cover}
//                             alt="Background Image" />
//                         <div className={`hero__card ${item.active ? 'active' : undefined}`}>
//                             <h1 className="hero__card-title">{item.name}</h1>
//                             <div className="hero__card-desc1">
//                                 <p>{item.type}</p>
//                                 <p>IMDb: {item.rating}</p>
//                                 <p>{item.year}</p>
//                                 <p>{item.time}</p>
//                                 <p>{item.genre}</p>
//                             </div>
//                             <p className="hero__card-desc2">
//                                 {item.desc}
//                             </p>
//                             <div className="hero__card-desc3">
//                                 <p>Tags: {item.tags}
//                                 </p>
//                                 <p>Starring:<span>{item.starring}</span></p>
//                             </div>
//                             <button className="hero__btn" onClick={toggleFrame}>
//                                 Watch trailer
//                             </button>
//                         </div>
//                         {item.active && (<Frame frame={item} status={frame} toggleFrame={toggleFrame} />)}
//                     </div>
//                 ))}
//                 {info && info.length > 0 && (<Carousel cards={info} cardsChange={cardChange} />)}
//             </section>
//         </>
//     );
// }