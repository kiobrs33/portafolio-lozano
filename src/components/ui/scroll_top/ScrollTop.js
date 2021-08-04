import React from 'react';

import { UilArrowUp } from '@iconscout/react-unicons';

export const ScrollTop = () => {

    const scrollUp = () => {
        const scrollUp = document.getElementById('scroll-up');
        window.scrollY >= 560 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
    }
    
    window.addEventListener('scroll', scrollUp  );

    return (
        <a href="#home" className="scrollup" id="scroll-up">
            <UilArrowUp className="scrollup__icon" />
        </a>
    )
}
