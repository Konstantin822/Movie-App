import React, { useState } from "react";
import { homeData } from "../../data/homeData.js";

import Card from '../../components/InfoCard/Card.jsx';

export default function Movies() {
    const [info, setInfo] = useState(homeData.cards.filter(card => card.type === "Movie"))
    const [selector, setSelector] = useState("--")
    const [search, setSearch] = useState("")

    const selectorChange = (item) => {
        setSelector(item.target.value)
    }

    const searchChange = (item) => {
        setSearch(item.target.value)
    }

    const searchBtn = () => {
        let filterMovies = homeData.cards.filter(card => card.type === "Movie")
        if (selector !== "--" && search) {
            filterMovies = filterMovies.filter(card => {
                if (selector === "Rating") {
                    return card.rating.toString() === search
                } else if (selector === "Genre") {
                    return card.genre.toLowerCase().includes(search.toLowerCase())
                } else if (selector === "Year") {
                    return card.year.toString() === search
                }
                return true
            })
        }
        setInfo(filterMovies)
        setSearch("")
    }

    const content = info.map(item => <Card key={item.id} content={item} />)
    return (
        <div className="movies">
            <div className="container movies__container">
                <div className="movies__filter">
                    <select value={selector} onChange={selectorChange}>
                        <option>--</option>
                        <option>Rating</option>
                        <option>Genre</option>
                        <option>Year</option>
                    </select>
                    <input type="text" value={search} onChange={searchChange} placeholder="Search" />
                    <button onClick={searchBtn}>Search</button>
                </div>
                {content}
            </div>
        </div>
    );
}