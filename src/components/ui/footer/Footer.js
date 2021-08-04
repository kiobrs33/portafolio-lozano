import React from 'react';

import { UilFacebookF } from '@iconscout/react-unicons';
import { UilInstagram } from '@iconscout/react-unicons';
import { UilLinkedinAlt } from '@iconscout/react-unicons';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container grid">
                    <div>
                        <h1 className="footer__title">Alexa</h1>
                        <span className="footer__subtitle">Frontend Developer</span>
                    </div>

                    <ul className="footer__links">
                        <li>
                            <a href="#services" className="footer__link" >Services</a>
                        </li>
                        <li>
                            <a href="#portfolio" className="footer__link" >Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact" className="footer__link" >Contactme</a>
                        </li>
                    </ul>

                    <div className="footer__socials">
                        <a href="https://wwww.facebook.com/"  rel="noreferrer" target="_blank" className="footer__social">
                            <UilFacebookF />
                        </a>

                        <a href="https://www.instagram.com/" rel="noreferrer" target="_blank" className="footer__social">
                            <UilInstagram />
                        </a>

                        <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank" className="footer__social">
                            <UilLinkedinAlt />
                        </a>
                    </div>
                </div>

                <p className="footer__copy">&#169; Bedicome. All right reserved</p>
            </div>
        </footer>
    )
}
