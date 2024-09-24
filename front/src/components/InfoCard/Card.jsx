// Import modules
import React from "react";
import { useParams } from "react-router-dom";
import { homeData } from "../../data/homeData";
// <=============================================================>

// Card
export default function Card() {
    // Search for card by id
    const { id } = useParams()
    const cardInfo = homeData.cards.find(card => card.id === parseInt(id))

    if (!cardInfo) {
        return <div>Card not found</div>
    }
    // <=============================================================>

    return (
        // Card layout
        <div className="card" key={cardInfo.id}>
            <img
                src={cardInfo.img}
                alt="Card Img" />
            <div className="card__info">
                <h1 className="card__info-title">{cardInfo.name}</h1>
                <div className="card__info-desc1">
                    <p>Rating: {cardInfo.rating}</p>
                    <p>Genre: {cardInfo.genre}</p>
                    <p>Tags:
                        <span>{cardInfo.tags[0].tag1},</span>
                        <span>{cardInfo.tags[0].tag2},</span>
                        <span>{cardInfo.tags[0].tag3}</span>
                    </p>
                    <p>Starring: {cardInfo.starring}</p>
                    <p>Time: {cardInfo.time}</p>
                    <p>Year: {cardInfo.year}</p>
                </div>
                <p className="card__info-desc2">
                    {cardInfo.desc2}
                </p>
            </div>
            <div className="card__frame">
                <iframe
                    width="1100"
                    height="610"
                    src={cardInfo.video}
                    title={cardInfo.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
        // <=============================================================>
    );
}
// <=============================================================>