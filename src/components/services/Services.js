import React, { useState } from 'react';

import { UilGrid } from '@iconscout/react-unicons';
import { UilArrowRight } from '@iconscout/react-unicons';
import { UilTimes } from '@iconscout/react-unicons';
import { UilCheckCircle } from '@iconscout/react-unicons';
import { UilArrow } from '@iconscout/react-unicons';
import { UilPen } from '@iconscout/react-unicons';

export const Services = () => {

    const [modalA, setModalA] = useState(false);
    const [modalB, setModalB] = useState(false);
    const [modalC, setModalC] = useState(false);

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer</span>

            <div className="services__container container grid">

                {/* Services 1 */}
                <div className="services__content">
                    <div>
                        <i className="uil uil-grid services__icon"></i>
                        <h3 className="services__title">Ui/Ux <br/> Designer</h3>
                    </div>
                    <span 
                        className="button button--flex button--small button--link services__button"
                        onClick={ () => setModalA(true) }   
                    >
                        View More
                        <i className="uil uil-arrow-right button__icon"></i>
                    </span>

                    <div className={modalA ? 'services__modal active-modal' : 'services__modal'}>
                        <div className="services__modal-content">
                            <h4 className="services__modal-title">Ui/Ux <br/> Designer</h4>
                            <i 
                                className="uil uil-times services__modal-close"
                                onClick={() => setModalA(false)}
                            ></i>

                            <ul className="services__modal-services">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>I develop the user interface.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Web page development.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>I create us element interactions.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>I position your company brand.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Services 2 */}
                <div className="services__content">
                    <div>
                        <UilArrow className="services__icon" />
                        <h3 className="services__title">Fronted <br/> Developer</h3>
                    </div>
                    <span 
                        className="button button--flex button--small button--link services__button"
                        onClick={ () => setModalB(true) }
                    >
                        View More
                        <UilArrowRight className="button__icon" />
                    </span>

                    <div className={modalB ? 'services__modal active-modal' : 'services__modal'}>
                        <div className="services__modal-content">
                            <h4 className="services__modal-title">Fronted <br/> Developer</h4>
                            <UilTimes 
                                className="services__modal-close" 
                                onClick={() => setModalB(false)}
                            />

                            <ul className="services__modal-services">
                                <li className="services__modal-service">
                                    <UilCheckCircle className="services__modal-icon" />
                                    <p>I develop the user interface.</p>
                                </li>
                                <li className="services__modal-service">
                                    <UilCheckCircle className="services__modal-icon" />
                                    <p>Web page development.</p>
                                </li>
                                <li className="services__modal-service">
                                    <UilCheckCircle className="services__modal-icon" />
                                    <p>I create us element interactions.</p>
                                </li>
                                <li className="services__modal-service">
                                    <UilCheckCircle className="services__modal-icon" />
                                    <p>I position your company brand.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Services 3 */}
                <div className="services__content">
                    <div>
                        <UilPen className="services__icon"/>
                        <h3 className="services__title">Branding <br/> Designer</h3>
                    </div>
                    <span 
                        className="button button--flex button--small button--link services__button"
                        onClick={ () => setModalC(true) }
                    >
                        View More
                        <UilArrowRight className="button__icon" />
                    </span>

                    <div className={modalC ? 'services__modal active-modal' : 'services__modal'}>
                        <div className="services__modal-content">
                            <h4 className="services__modal-title">Branding <br/> Designer</h4>
                            <UilTimes 
                                className="services__modal-close" 
                                onClick={() => setModalC(false)}
                            />

                            <ul className="services__modal-services">
                                <li className="services__modal-service">
                                    <UilCheckCircle className="services__modal-icon" />
                                    <p>I develop the user interface.</p>
                                </li>
                                <li className="services__modal-service">
                                    <UilCheckCircle className="services__modal-icon" />
                                    <p>Web page development.</p>
                                </li>
                                <li className="services__modal-service">
                                    <UilCheckCircle className="services__modal-icon" />
                                    <p>I create us element interactions.</p>
                                </li>
                                <li className="services__modal-service">
                                    <UilCheckCircle className="services__modal-icon" />
                                    <p>I position your company brand.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
