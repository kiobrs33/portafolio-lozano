import React from 'react';

import SwiperCore, { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import { PortfolioItem } from './PortfolioItem';

import pictureA from '../../img/rene.jpg';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export const Portfolio = () => {
    return (
        <section className="portfolio section" id="portofolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Most Recent work</span>

            <Swiper
                cssMode={true}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{ clickable: true }}
                mousewheel={true}
                keyboard={true}
                className="mySwiper portfolio__container container"
                loop={true}
            >
                {
                    [1,2,3].map((val, index) => 
                        <SwiperSlide key={index}>
                            <PortfolioItem
                                image={pictureA}
                                name_img="paginaPedidos"
                                title="Modern Website"
                                description="Website adaptable to all devices and animated interactions."
                                url="wwww.naan.com"
                                
                            />
                        </SwiperSlide>
                    )
                }
                <div className="swiper-button-prev">
                    <i class="uil uil-angle-left swiper-portfolio-icon"></i>
                </div>
                <div className="swiper-button-next">
                    <i class="uil uil-angle-right swiper-portfolio-icon"></i>
                </div>
            </Swiper>

        </section>
    )
}
