// Import modules
import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/effect-coverflow';

import { EffectCoverflow, Autoplay } from 'swiper/modules'

// Carousel 
export default function Carousel({ cards, cardsRender }) {
    return (
        // Swiper layout
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            loop={true}
            modules={[EffectCoverflow, Autoplay]}
            className="cardSwiper"
        >
            {
                cards.map(item => (
                    <SwiperSlide key={item.id}>
                        <img src={item.img}
                            alt="Card Img"
                            onClick={() => cardsRender(item.id)}
                        />
                    </SwiperSlide>
                ))}
        </Swiper>
        // <=============================================================>
    );
}
// <=============================================================>