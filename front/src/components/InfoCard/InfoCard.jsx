import React from "react";

export default function InfoCard({ content, cardsRender, selector, selectorChange, search, searchChange, searchBtn }) {

    return (
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

                {content.map(item => (
                    <div className={`cards__info ${item.active ? undefined : 'active'}`} key={item.id} onClick={() => cardsRender(item.id)}>
                        <img
                            src={item.img}
                            alt="Image" />
                        <h1 className="cards__info-title">{item.name}</h1>
                        <div className="cards__info-desc">
                            <p>Rating: {item.rating}</p>
                            <p>Genre: {item.genre}</p>
                            <p>Year: {item.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}