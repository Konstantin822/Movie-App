import React, { useEffect, useState } from "react";

import { homeData } from "../../data/homeData";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';

export function Card({ onSelect }) {
    return (
        <div className="cards__row">
            <Swiper
                scrollbar={{ hide: true }}
                slidesPerView={3}
                spaceBetween={10}
                modules={[Scrollbar]}
                className="mySwiper cards__slider">
                {homeData.cards.map(item => (
                    <SwiperSlide key={item.id} onClick={() => onSelect(item)}>
                        <div className="cards__row_card">
                            <img src={item.img} alt={item.name} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default function Home() {
    const [selectCard, setSelectCard] = useState(homeData.cards[0])

    useEffect(() => {
        document.body.style.backgroundImage = `url(${selectCard.cover})`
        document.body.style.backgroundSize = 'cover'
        document.body.style.backgroundPosition = 'center'
        document.body.style.backgroundRepeat = 'no-repeat'
    }, [selectCard])
    return (
        <>
            <section className="hero">
                <div className="container hero__container">
                    <div className="hero__card">
                        <h1 className="hero__card_title">{selectCard.name}</h1>
                        <div className="hero__card_info">
                            <div className="hero__card_info-desc1">
                                <p>{selectCard.type}</p>
                                <p>{selectCard.rating}</p>
                                <p>{selectCard.date}</p>
                                <p>{selectCard.time}</p>
                                <p>{selectCard.genre}</p>
                            </div>
                            <div className="hero__card_info-desc2">
                                <p>Tags: <span>{selectCard.tags.map((tag, index) => <span key={index}>{tag}</span>)}</span></p>
                                <p>Starring: <span>{selectCard.starring}</span></p>
                            </div>
                            <p className="hero__card_info-desc3">{selectCard.desc}</p>
                        </div>
                        <div className="hero__card_buttons">
                            <button className="hero__card_buttons-btn">Watch trailer</button>
                            <button className="hero__card_buttons-btn">Watch now</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cards">
                <div className="container cards__container">
                    {/* Тут слайдер */}
                    <Card onSelect={setSelectCard} />
                </div>
            </section>
        </>
    );
}