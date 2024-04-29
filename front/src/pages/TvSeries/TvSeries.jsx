import React, { useState, useEffect } from "react";
import { homeData } from "../../data/homeData.js";

import InfoCard from '../../components/InfoCard/InfoCard.jsx';

export default function Movies() {
    const [info, setInfo] = useState([])
    const [selector, setSelector] = useState("--")
    const [search, setSearch] = useState("")

    useEffect(() => {
        setInfo(homeData.cards.filter(card => card.type === "Movie"))
    }, [])

    const selectorChange = (item) => {
        setSelector(item.target.value)
    }

    const searchChange = (item) => {
        setSearch(item.target.value)
    }

    const searchBtn = () => {
        let filterSeries = info
        if (selector !== "--" && search) {
            filterSeries = filterSeries.filter(card => {
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
        setInfo(filterSeries)
        setSearch("")
    }

    return (
        <div className="series">
            <div className="container series__container">
                <div className="series__filter">
                    <select value={selector} onChange={selectorChange}>
                        <option>--</option>
                        <option>Rating</option>
                        <option>Genre</option>
                        <option>Year</option>
                    </select>
                    <input type="text" value={search} onChange={searchChange} placeholder="Search" />
                    <button onClick={searchBtn}>Search</button>
                </div>
                {info && info.length > 0 && info.map(item => <InfoCard key={item.id} content={item} />)}
            </div>
        </div>
    );
}