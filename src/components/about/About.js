import React from 'react';

import cv from '../../img/Lozano_Ramos_Rene_CV.pdf'
import { data } from '../../data/data';

export const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">Acerca de mí</h2>
            <span className="section__subtitle">Mi introduccion</span>

            <div className="about__container container grid">
                <img 
                    src="https://res.cloudinary.com/dks25ivcf/image/upload/v1628042175/portafolio/rene_lcycm4.jpg" 
                    alt="rene" 
                    className="about__img" 
                />

                <div className="about__data">
                    <p className="about__description">{data.about}</p>

                    <div className="about__info">
                        <div>
                            <span className="about__info-title">01+</span>
                            <span className="about__info-name">Años de experiencia</span>
                        </div>

                        <div>
                            <span className="about__info-title">5+</span>
                            <span className="about__info-name">Proyectos completados</span>
                        </div>

                        <div>
                            <span className="about__info-title">03+</span>
                            <span className="about__info-name">Compañias de trabajo</span>
                        </div>
                    </div>

                    <div className="about__buttons">
                        <a download="" href={cv} className="button button--flex">
                            Download Cv <i className="uil uil-download-alt button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
