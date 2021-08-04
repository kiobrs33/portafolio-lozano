import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"


// import Swiper core and required modules
import SwiperCore, {
    Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);


export const SwiperUi = () => {
    return (
        <>
        <h1>SWIPER</h1>
            <Swiper cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} className="mySwiper">
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </>
    )
}
