import React from "react";

export default function InfoCard({ content, cardsRender }) {
    return (
        <>
            {content.map(item => (
                <div className="cards-info" key={item.id} onClick={() => cardsRender(item.id)}>
                    <img
                        src={item.img}
                        alt="Image" />
                    <h1 className="cards-info__card-title">{item.name}</h1>
                    <div className="cards-info__card-desc1">
                        <p>Rating: {item.rating}</p>
                        <p>Genre: {item.genre}</p>
                        <p>Year: {item.year}</p>
                    </div>
                </div>
            ))}
        </>
    );
}