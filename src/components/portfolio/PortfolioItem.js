import React from 'react';

export const PortfolioItem = ({image, title, description, url}) => {
    return (
        <div className="portfolio__content grid">
            <img src={image} alt={title} className="portfolio__img" />

            <div className="portfolio__data">
                <h3 className="portfolio__title">{title}</h3>
                <p className="portfolio__description">{description}</p>

                <a href={url} target="_blank" rel="noreferrer" className="button button--flex button--small portfolio__button">
                    Demo
                    <i className="uil uil-arrow-right button__icon"></i>
                </a>
            </div>
        </div>
    )
}
