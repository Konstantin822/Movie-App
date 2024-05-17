// Import modules and data
import React, { useState, useEffect } from "react";
import { homeData } from "../../data/homeData.js";

import Carousel from '../../components/Carousel/Carousel.jsx';
import Frame from '../../components/Frame/Frame.jsx';

// Home page
export default function Home() {
    // Initialize state
    const [info, setInfo] = useState([])
    const [frame, setFrame] = useState(false)

    useEffect(() => {
        setInfo(homeData.cards)
    }, [])
    // <=============================================================>

    // Update card
    const cardRender = id => {
        const newInfo = info.map(item => {
            item.active = false

            if (item.id === id) {
                item.active = true
            }
            return item
        })
        setInfo(newInfo)
    }
    // <=============================================================>

    // Toggle frame
    const toggleFrame = () => {
        setFrame(!frame)
    }
    // <=============================================================>

    return (
        // Section hero layout
        <>
            <section className="hero">
                {info && info.length > 0 && info.map(item => (
                    <div className="container hero__container" key={item.id}>
                        <img
                            className={`hero__bg ${item.active ? 'active' : undefined}`}
                            src={item.cover}
                            alt="Background Image" />
                        <div className={`hero__card ${item.active ? 'active' : undefined}`}>
                            <h1 className="hero__card-title">{item.name}</h1>
                            <div className="hero__card-desc1">
                                <p>{item.type}</p>
                                <p>IMDb: {item.rating}</p>
                                <p>{item.year}</p>
                                <p>{item.time}</p>
                                <p>{item.genre}</p>
                            </div>
                            <p className="hero__card-desc2">
                                {item.desc}
                            </p>
                            <div className="hero__card-desc3">
                                <p>Tags:
                                    <span>{item.tags[0].tag1}</span>
                                    <span>{item.tags[0].tag2}</span>
                                    <span>{item.tags[0].tag3}</span>
                                </p>
                                <p>Starring:<span>{item.starring}</span></p>
                            </div>
                            <button className="hero__btn" onClick={toggleFrame}>
                                Watch trailer
                            </button>
                        </div>
                        {item.active && (<Frame frame={item} status={frame} toggleFrame={toggleFrame} />)}
                    </div>
                ))}
                {info && info.length > 0 && <Carousel cards={info} cardsRender={cardRender} />}
            </section>
        </>
        // <=============================================================>
    );
}
// <=============================================================>