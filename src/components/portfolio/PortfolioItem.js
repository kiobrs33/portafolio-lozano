import React from 'react';

import { UilArrowRight } from '@iconscout/react-unicons';

export const PortfolioItem = ({image, name_img, title, description, url}) => {
    return (
        <div className="portfolio__content grid">
            <img src={image} alt={name_img} className="portfolio__img" />

            <div className="portfolio__data">
                <h3 className="portfolio__title">{title}</h3>
                <p className="portfolio__description">{description}</p>

                <a href={`#${url}`} className="button button--flex button--small portfolio__button">
                    Demo
                    <UilArrowRight className="button__icon" />
                </a>
            </div>
        </div>
    )
}
