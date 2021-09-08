import React from 'react';

import { UilStar } from '@iconscout/react-unicons';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import imgA from '../../img/rene_lentes.jpg';

import SwiperCore, { Pagination } from 'swiper/core';
SwiperCore.use([Pagination]);

export const Testimonial = () => {
    return (
        <section className="testimonial section">
            <h2 className="section__title">Testimonios</h2>
            <span className="section__subtitle">Mis testimonios</span>

            <Swiper
                loop={true}
                grabCursor={true}
                spaceBetween={48}
                pagination={{
                    "dynamicBullets": true,
                    el: ".swiper-pagination",
                    clickable: true,
                }}
                className="mySwiper testimonial__container container"
            >
                <SwiperSlide>
                    {/* Testimonial content 1 */}
                    <div className="testimonial__content">
                        <div className="testimonial__data">
                            <div className="testimonial__header">
                                <img src={imgA} alt="" className="testimonial__img" />

                                <div>
                                    <h3 className="testimonial__name">Sara Smith</h3>
                                    <span className="testimonial__client">Client</span>
                                </div>
                            </div>

                            <div>
                                <UilStar className="testimonial__icon-start" />
                                <UilStar className="testimonial__icon-start" />
                                <UilStar className="testimonial__icon-start" />
                                <UilStar className="testimonial__icon-start" />
                                <UilStar className="testimonial__icon-start" />
                            </div>

                        </div>
                        <p className="testimonial__description">
                            I get a good impression, I carry out my project with all the possible quality and attetion and
                            support 24 hours a dat.
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    {/* Testimonial content 2 */}
                    <div className="testimonial__content">
                        <div className="testimonial__data">
                            <div className="testimonial__header">
                                <img src={imgA} alt="" className="testimonial__img" />

                                <div>
                                    <h3 className="testimonial__name">Sara Smith</h3>
                                    <span className="testimonial__client">Client</span>
                                </div>
                            </div>

                            <div>
                                <UilStar className="testimonial__icon-start" />
                                <UilStar className="testimonial__icon-start" />
                                <UilStar className="testimonial__icon-start" />
                                <UilStar className="testimonial__icon-start" />
                                <UilStar className="testimonial__icon-start" />
                            </div>

                        </div>
                        <p className="testimonial__description">
                            I get a good impression, I carry out my project with all the possible quality and attetion and
                            support 24 hours a dat.
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    {/* Testimonial content 3 */}
                    <div className="testimonial__content">
                        <div className="testimonial__data">
                            <div className="testimonial__header">
                                <img src={imgA} alt="" className="testimonial__img" />

                                <div>
                                    <h3 className="testimonial__name">Sara Smith</h3>
                                    <span className="testimonial__client">Client</span>
                                </div>
                            </div>

                            <div>
                                <UilStar className="testimonial__icon-start" />
                                <UilStar className="testimonial__icon-start" />
                                <UilStar className="testimonial__icon-start" />
                                <UilStar className="testimonial__icon-start" />
                                <UilStar className="testimonial__icon-start" />
                            </div>

                        </div>
                        <p className="testimonial__description">
                            I get a good impression, I carry out my project with all the possible quality and attetion and
                            support 24 hours a dat.
                        </p>
                    </div>
                </SwiperSlide>

                <div className="swiper-pagination swiper-pagination-testimonial">
                </div>
            </Swiper>
        </section>
    )
}
