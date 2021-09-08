import React from 'react';

import SwiperCore, { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import { PortfolioItem } from './PortfolioItem';
import { data } from '../../data/data';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export const Portfolio = () => {

    const { projects } = data;

    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Portafolio</h2>
            <span className="section__subtitle">Trabajo mas recientes</span>

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
                    projects.map((item, index) => 
                        <SwiperSlide key={index}>
                            <PortfolioItem
                                image={item.project_img}
                                title={item.project_name}
                                description={item.project_description}
                                url={item.project_link}
                            />
                        </SwiperSlide>
                    )
                }
                <div className="swiper-button-prev">
                    <i className="uil uil-angle-left swiper-portfolio-icon"></i>
                </div>
                <div className="swiper-button-next">
                    <i className="uil uil-angle-right swiper-portfolio-icon"></i>
                </div>
            </Swiper>

        </section>
    )
}
