// Import modules and data
import React, { useState, useEffect } from "react";
import { homeData } from "../../data/homeData.js";

import InfoCard from '../../components/InfoCard/InfoCard.jsx';
// <=============================================================>

// Movies page
export default function Movies() {
    // Initialize state
    const [info, setInfo] = useState([])
    const [selector, setSelector] = useState("--")
    const [search, setSearch] = useState("")

    useEffect(() => {
        setInfo(homeData.cards.filter(card => card.type === "Movie"))
    }, [])
    // <=============================================================>

    // Filter movies based on selected option and search input 
    const filter = () => {
        let filterMovies = homeData.cards.filter(card => card.type === "Movie")
        if (selector !== "--" && search) {
            filterMovies = filterMovies.filter(card => {
                switch (selector) {
                    case "Rating":
                        return card.rating.toString() === search
                    case "Genre":
                        return card.genre.toLowerCase().includes(search.toLowerCase())
                    case "Year":
                        return card.year.toString() === search
                    default:
                        return true
                }
            })
        }
        setInfo(filterMovies)
        setSelector("--")
    }
    // <=============================================================>

    // State update control
    const selectorChange = (item) => {
        setSelector(item.target.value)
    }

    const searchChange = (item) => {
        setSearch(item.target.value)
    }

    const searchBtn = () => {
        filter()
        setSearch("")
    }
    // <=============================================================>

    // Render card
    const cardRender = id => {
        const newInfo = info.map(card => {
            card.active = false

            if (card.id === id) {
                card.active = true
            }
            return card
        })
        setInfo(newInfo)
    }
    // <=============================================================>

    return (
        // Movies layout
        <div className="movies">
            <div className="container movies__container">
                {info && info.length > 0 && <InfoCard
                    content={info}
                    cardsRender={cardRender}
                    selector={selector}
                    selectorChange={selectorChange}
                    search={search}
                    searchChange={searchChange}
                    searchBtn={searchBtn}
                />}
            </div>
        </div>
        // <=============================================================>
    );
}
// <=============================================================>