import React, { useState } from 'react';

import { data } from '../../../data/data';

export const Header = () => {

    const [ showMenu, setShowMenu ] = useState(false);
    const [iconTheme, setIconTheme] = useState()

    const handleOpen = () => {
        setShowMenu(true);
    }
    const handleClose = () => {
        setShowMenu(false);
    }

    // const darkTheme = 'dark';
    // const lightTheme = 'light';
    // let theme = localStorage.getItem('theme');

    // if( theme ){
    //     document.body.classList.add(theme)
    // }else{

    //     document.body.classList.add(lightTheme)
    // }

    // const handleChangeTheme = () => {
    //     if( theme === darkTheme ){
    //         document.body.classList.replace(darkTheme, lightTheme)

    //         localStorage.setItem('theme', lightTheme);
    //         theme = lightTheme;
    //     }else{
    //         document.body.classList.replace(lightTheme,darkTheme);

    //         localStorage.setItem('theme', darkTheme);
    //         theme = darkTheme;
    //     }
    // }

    const handleChangeTheme = () => {
        const value = document.body.classList.toggle('dark');
        setIconTheme(value);
    }

    const scrollHeader = () => {
        const nav = document.getElementById('header');
        window.scrollY >= 80 ? nav.classList.add('scroll-header') : nav.classList.remove('scroll-header');
    }
    window.addEventListener('scroll',scrollHeader);

    return (

        <header className='header' id="header">
            <nav className="nav container">

                <a href="#home" className="nav__logo">{ data.first_name } </a>

                <div className={`nav__menu ${showMenu && 'show-menu'}`} id="nav-menu">

                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a 
                                href="#home"
                                rel="noreferrer"
                                className="nav__link"
                                onClick={handleClose}
                            >
                                <i className="uil uil-estate nav__icon"></i> Inicio
                            </a>
                        </li>

                        <li className="nav__item">
                            <a 
                                href="#about" 
                                className="nav__link"
                                onClick={handleClose}
                            >
                                <i className="uil uil-user nav__icon"></i> Acerca
                            </a>
                        </li>

                        <li className="nav__item">
                            <a 
                                href="#skills" 
                                className="nav__link"
                                onClick={handleClose}
                            >
                                <i className="uil uil-file nav__icon"></i> Habilidades
                            </a>
                        </li>

                        <li className="nav__item">
                            <a 
                                href="#services" 
                                className="nav__link"
                                onClick={handleClose}
                            >
                                <i className="uil uil-briefcase-alt nav__icon"></i> Servicios
                            </a>
                        </li>

                        <li className="nav__item">
                            <a 
                                href="#portfolio" 
                                className="nav__link"
                                onClick={handleClose}
                            >
                                <i className="uil uil-scenery nav__icon"></i> Portafolio
                            </a>
                        </li>

                        <li className="nav__item">
                            <a 
                                href="#contact" 
                                className="nav__link"
                                onClick={handleClose}
                            >
                                <i className="uil uil-message nav__icon"></i> Contactame
                            </a>
                        </li>
                    </ul>

                    <i 
                        className="uil uil-times nav__close" 
                        id="nav-close" 
                        onClick={handleClose} 
                    ></i>

                </div>

                <div className="nav__btns">
                    <i
                        className={`${ iconTheme ? 'uil uil-sun' : 'uil uil-moon'} change-theme`}
                        id="theme-button"
                        onClick={handleChangeTheme}
                    ></i>
                    
                    <div 
                        className="nav__toggle" 
                        id="nav-toggle"
                        onClick={handleOpen}
                    >
                        <i className="uil uil-apps"></i>
                    </div>

                </div>

            </nav>
        </header>
    )
}
