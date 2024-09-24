// export default function Card({ content }) {
//     return (
//         <div className="card">
//             <img src={content.img} />
//             <div className="card-info">
//                 <h2>{content.name}</h2>
//                 <h4>Rating: {content.rating}</h4>
//                 <h4>Year: {content.year}</h4>
//                 <h4>Genre: {content.genre}</h4>
//             </div>
//         </div>
//     )
// }



// export default function InfoCard({ content }) {
//     return (
//         <div className="cards-info">
//             <img className="cards-info__bg"
//                 src={content.cover}
//                 alt="Background Image" />
//             <div className="cards-info__card">
//                 <img className="cards-info__img"
//                     src={content.img}
//                     alt="Image" />
//                 <h1 className="cards-info__card-title">{content.name}</h1>
//                 <div className="cards-info__card-desc1">
//                     <p>{content.type}</p>
//                     <p>IMDb: {content.rating}</p>
//                     <p>{content.year}</p>
//                     <p>{content.time}</p>
//                     <p>{content.genre}</p>
//                     <div className="cards-info__card-desc2">
//                         <p>Tags:
//                             <span>{content.tags[0].tag1},</span>
//                             <span>{content.tags[0].tag2},</span>
//                             <span>{content.tags[0].tag3},</span>
//                         </p>
//                         <p>Starring: {content.starring}</p>
//                     </div>
//                 </div>
//                 <p className="cards-info__card-desc3">
//                     {content.desc}
//                 </p>
//                 <button className="cards-info__btn">
//                     Watch trailer
//                 </button>
//             </div>
//         </div>
//     );
// }


// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function InfoCard({ content, cardsRender, selector, selectorChange, search, searchChange, searchBtn }) {
//     const [subSelect, setSubSelect] = useState([])

//     const handleSelectorChange = (item) => {
//         const selectedOption = item.target.value
//         setSubSelect(getSubSelect(selectedOption))
//         selectorChange(item)
//     }

//     const getSubSelect = (selectedOption) => {
//         switch (selectedOption) {
//             case "Rating":
//                 return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
//             case "Genre":
//                 return ["Action", "Comedy", "Drama", "Thriller", "Horror", "Sci-fi"]
//             case "Year":
//                 return ["2011", "2013", "2021", "2024"]
//             default:
//                 return []
//         }
//     }
//     return (
//         <>
//             <div className="cards">
//                 <div className="cards__filter">
//                     <select value={selector} onChange={handleSelectorChange}>
//                         <option>--</option>
//                         <option>Rating</option>
//                         <option>Genre</option>
//                         <option>Year</option>
//                     </select>

//                     {selector !== "--" && (
//                         <select value={search} onChange={searchChange}>
//                             <option value="">--</option>
//                             {subSelect.map((option) => (
//                                 <option key={option} value={option}>
//                                     {option}
//                                 </option>
//                             ))}
//                         </select>
//                     )}
//                     <button onClick={searchBtn}>Search</button>
//                 </div>

//                 {content.map(item => (
//                     <Link to={`/card/${item.id}`} key={item.id}>
//                         <div className={`cards__info ${item.active ? undefined : 'active'}`} onClick={() => cardsRender(item.id)}>
//                             <img
//                                 src={item.img}
//                                 alt="Image" />
//                             <h1 className="cards__info-title">{item.name}</h1>
//                             <div className="cards__info-desc">
//                                 <p>Rating: {item.rating}</p>
//                                 <p>Genre: {item.genre}</p>
//                                 <p>Year: {item.year}</p>
//                             </div>
//                         </div>
//                     </Link>
//                 ))}
//             </div>
//         </>
//     );
// }