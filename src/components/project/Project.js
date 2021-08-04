import React from 'react';

import { UilMessage } from '@iconscout/react-unicons';
import imgA from '../../img/rene.jpg';

export const Project = () => {
    return (
        <section className="project section">
            <div className="project__bg">
                <div className="project__container container grid">
                    <div className="project__data">
                        <h2 className="project__title">You have a new project.</h2>
                        <p className="project__description">
                            Contact me now and get a 30% discount
                        </p>

                        <a href="#contact" className="button button--flex button--white">
                            Contact Me
                            <UilMessage className="project__icon button__icon" />
                        </a>
                    </div>

                    <img src={imgA} alt="" className="project__img" />
                </div>
            </div>
        </section>
    )
}