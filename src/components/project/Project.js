import React from 'react';

import imgA from '../../img/rene_lentes.jpg';

export const Project = () => {
    return (
        <section className="project section">
            <div className="project__bg">
                <div className="project__container container grid">
                    <div className="project__data">
                        <h2 className="project__title">Tu tienes un nuevo proyecto.</h2>
                        <p className="project__description">
                            Contactame y podremos conversar mucho mas.
                        </p>

                        <a href="#contact" className="button button--flex button--white">
                            Contactame
                            <i className="uil uil-message project__icon button__icon"></i>
                        </a>
                    </div>

                    <img src={imgA} alt="" className="project__img" />
                </div>
            </div>
        </section>
    )
}