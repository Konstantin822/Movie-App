import React from "react";
import { useParams } from "react-router-dom";
import { homeData } from "../../data/homeData";

export default function Card() {
    const { id } = useParams()
    const cardInfo = homeData.cards.find(card => card.id === parseInt(id))
    if (!cardInfo) {
        return <div>Card not found</div>
    }
    return (
        <div className="card" key={cardInfo.id}>
            <img
                src={cardInfo.img}
                alt="Image" />
            <div className="card__info">
                <h1 className="card__info-title">{cardInfo.name}</h1>
                <div className="card__info-desc1">
                    <p>Rating: {cardInfo.rating}</p>
                    <p>Genre: {cardInfo.genre}</p>
                    <p>Time: {cardInfo.time}</p>
                    <p>Year: {cardInfo.year}</p>
                </div>
                <p className="card__info-desc2">
                    {cardInfo.desc}
                </p>
            </div>
        </div>

    );
}