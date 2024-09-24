// Import modules
import React from "react";
import { Link } from "react-router-dom";
// <=============================================================>

// Info card
export default function InfoCard({ content, cardsRender, selector, selectorChange, search, searchChange, searchBtn }) {
    return (
        // Info card layout
        <>
            <div className="cards">
                <div className="cards__filter">
                    <select value={selector} onChange={selectorChange}>
                        <option>--</option>
                        <option>Rating</option>
                        <option>Genre</option>
                        <option>Year</option>
                    </select>
                    <input type="text" value={search} onChange={searchChange} placeholder="Search" />
                    <button onClick={searchBtn}>Search</button>
                </div>

                {/* Link to card */}
                {content.map(item => (
                    <Link to={`/card/${item.id}`} key={item.id}>
                        <div className={`cards__info ${item.active ? undefined : 'active'}`} onClick={() => cardsRender(item.id)}>
                            <img
                                src={item.img}
                                alt="Card Img" />
                            <h1 className="cards__info-title">{item.name}</h1>
                            <div className="cards__info-desc">
                                <p>Rating: {item.rating}</p>
                                <p>Genre: {item.genre}</p>
                                <p>Year: {item.year}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
        // <=============================================================>
    );
}
// <=============================================================>