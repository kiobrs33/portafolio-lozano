import React, { useState } from 'react'

export const ServiceItem = ({ title, icon, points }) => {

    const [modal, setModal] = useState(false);

    return (
        <div className="services__content">
            <div>
                <i className={`${icon} services__icon`}></i>
                <h3 className="services__title">{title}</h3>
            </div>
            <span
                className="button button--flex button--small button--link services__button"
                onClick={() => setModal(true)}
            >
                Ver mas
                <i className="uil uil-arrow-right button__icon"></i>
            </span>

            <div className={modal ? 'services__modal active-modal' : 'services__modal'}>
                <div className="services__modal-content">
                    <h4 className="services__modal-title">{title}</h4>
                    <i
                        className="uil uil-times services__modal-close"
                        onClick={() => setModal(false)}
                    ></i>

                    <ul className="services__modal-services">
                        {
                            points.map((item, index) => (
                                <li className="services__modal-service" key={index}>
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>{item}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
