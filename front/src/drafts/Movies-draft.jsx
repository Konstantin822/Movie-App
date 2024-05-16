// import React, { useState, useEffect } from "react";
// import { homeData } from "../../data/homeData.js";

// import InfoCard from '../../components/InfoCard/InfoCard.jsx';
// import Card from '../../components/InfoCard/Card.jsx';

// export default function Movies() {
//     const [info, setInfo] = useState([])
//     const [selector, setSelector] = useState("--")
//     const [search, setSearch] = useState("")

//     useEffect(() => {
//         setInfo(homeData.cards.filter(card => card.type === "Movie"))
//     }, [])

//     const selectorChange = (item) => {
//         setSelector(item.target.value)
//     }

//     const searchChange = (item) => {
//         setSearch(item.target.value)
//     }

//     const searchBtn = () => {
//         let filterMovies = info
//         if (selector !== "--" && search) {
//             filterMovies = filterMovies.filter(card => {
//                 if (selector === "Rating") {
//                     return card.rating.toString() === search
//                 } else if (selector === "Genre") {
//                     return card.genre.toLowerCase().includes(search.toLowerCase())
//                 } else if (selector === "Year") {
//                     return card.year.toString() === search
//                 }
//                 return true
//             })
//         }
//         setInfo(filterMovies)
//         setSearch("")
//     }

//     const cardRender = id => {
//         const newInfo = info.map(card => {
//             card.active = false

//             if (card.id === id) {
//                 card.active = true
//             }
//             return card
//         })

//         setInfo(newInfo)
//     }

//     return (
//         <div className="movies">
//             <div className="container movies__container">
//                 {/* {info && info.length > 0 && <Card content={info} />} */}

//                 {/* {showCards && info && info.length > 0 && <InfoCard content={info} cardsRender={cardRender} />} */}
//                 {info && info.length > 0 && <InfoCard
//                     content={info}
//                     cardsRender={cardRender}
//                     selector={selector}
//                     selectorChange={selectorChange}
//                     search={search}
//                     searchChange={searchChange}
//                     searchBtn={searchBtn}
//                 />}
//             </div>
//         </div>
//     );
// }