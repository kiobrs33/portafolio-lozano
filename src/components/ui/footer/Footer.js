import React from 'react';
import { data } from '../../../data/data';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container grid">
                    <div>
                        <h1 className="footer__title">{data.first_name}</h1>
                        <span className="footer__subtitle">Programador</span>
                    </div>

                    <ul className="footer__links">
                        <li>
                            <a href="#services" className="footer__link" >Servicios</a>
                        </li>
                        <li>
                            <a href="#portfolio" className="footer__link" >Portafolio</a>
                        </li>
                        <li>
                            <a href="#contact" className="footer__link" >Contactame</a>
                        </li>
                    </ul>

                    <div className="footer__socials">
                        <a href="https://wwww.facebook.com/" rel="noreferrer" target="_blank" className="footer__social">
                            <i className="uil uil-facebook-f"></i>
                        </a>

                        <a href="https://www.instagram.com/" rel="noreferrer" target="_blank" className="footer__social">
                        <i className="uil uil-instagram"></i>
                        </a>

                        <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank" className="footer__social">
                        <i className="uil uil-linkedin-alt"></i>
                        </a>
                    </div>
                </div>

                <p className="footer__copy">&#169; {data.name}. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}
