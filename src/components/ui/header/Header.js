import React, { useState } from 'react';

//IconsCout
import { UilEstate } from '@iconscout/react-unicons';
import { UilUser } from '@iconscout/react-unicons';
import { UilFile } from '@iconscout/react-unicons';
import { UilBriefcaseAlt } from '@iconscout/react-unicons';
import { UilScenery } from '@iconscout/react-unicons';
import { UilMessage } from '@iconscout/react-unicons';
import { UilTimes } from '@iconscout/react-unicons';
import { UilApps } from '@iconscout/react-unicons';
import { UilMoon } from '@iconscout/react-unicons';

export const Header = () => {

    const [showMenu, setShowMenu] = useState(false);
    
    const handleOpen = () => {
        setShowMenu(true);
    }

    const handleClose = () => {
        setShowMenu(false);
    }

    

    


    // themeButton.addEventListener('click', () => {
    //     document.body.classList.toggle(darkTheme);
    //     themeButton.classList.toggle(iconTheme);

    //     localStorage.setItem('selected-theme', getCurrentTheme())
    //     localStorage.setItem('selected-icon', getCurrentIcon())
    // })
    // console.log(themeButton);

    // const themeButton = document.getElementById('theme-button');
    // const darkTheme = 'dark-theme';
    // const iconTheme = 'uil-sun';

    // const selectedTheme = localStorage.getItem('selected-theme');
    // const selectedIcon = localStorage.getItem('selected-icon');

    // const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';

    // //Para cambiar el Icono del boton
    // const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';
    //     console.log(document.body.classList);
    // if(selectedTheme){
    //     document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    //     themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
    // }

    const handleChangeTheme = () => {
        document.body.classList.toggle('dark')

        //Color Theme

        // document.body.classList.toggle(darkTheme);
        // themeButton.classList.toggle(iconTheme);

        // localStorage.setItem('selected-theme', getCurrentTheme())
        // localStorage.setItem('selected-icon', getCurrentIcon())
    }



    //Background Color of the Header
    const scrollHeader = () => {
        const nav = document.getElementById('header');
        window.scrollY >= 80 ? nav.classList.add('scroll-header') : nav.classList.remove('scroll-header');
    }
    window.addEventListener('scroll',scrollHeader);

    return (
        
        <header className='header' id="header">
            <nav className="nav container">

                <a href="#home" className="nav__logo">Rene</a>

                <div className={`nav__menu ${showMenu && 'show-menu'}`} id="nav-menu">

                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a 
                                href="#home"
                                rel="noreferrer"
                                className="nav__link"
                                onClick={handleClose}
                            >
                                <UilEstate className="nav__icon" /> Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a 
                                href="#about" 
                                className="nav__link"
                                onClick={handleClose}
                            >
                                <UilUser className="nav__icon" /> About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a 
                                href="#skills" 
                                className="nav__link"
                                onClick={handleClose}
                            >
                                <UilFile className="nav__icon" /> Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a 
                                href="#services" 
                                className="nav__link"
                                onClick={handleClose}
                            >
                                <UilBriefcaseAlt className="nav__icon" /> Services
                            </a>
                        </li>

                        <li className="nav__item">
                            <a 
                                href="#portofolio" 
                                className="nav__link"
                                onClick={handleClose}
                            >
                                <UilScenery className="nav__icon" /> Portofolio
                            </a>
                        </li>

                        <li className="nav__item">
                            <a 
                                href="#contact" 
                                className="nav__link"
                                onClick={handleClose}
                            >
                                <UilMessage className="nav__icon" /> Contactme
                            </a>
                        </li>
                    </ul>

                    <UilTimes 
                        className="nav__close" 
                        id="nav-close"
                        onClick={handleClose}
                    />

                </div>

                <div className="nav__btns">
                    {/* Theme change button */}
                    <UilMoon 
                        className="change-theme" 
                        id="theme-button" 
                        onClick={handleChangeTheme}
                    />

                    <div 
                        className="nav__toggle" 
                        id="nav-toggle"
                        onClick={handleOpen}
                    >
                        <UilApps />
                    </div>
                </div>

            </nav>
        </header>
    )
}
