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