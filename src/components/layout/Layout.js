import React from 'react';

import { Header } from '../ui/header/Header';
import { Home } from '../home/Home';
import { Skills } from '../skills/Skills';
import { About } from '../about/About';
import { Qualification } from '../qualification/Qualification';
import { Services } from '../services/Services';
import { Portfolio } from '../portfolio/Portfolio';
import { Project } from '../project/Project';
// import { Testimonial } from '../testimonial/Testimonial';
import { Contact } from '../contact/Contact';
import { Footer } from '../ui/footer/Footer';
import { ScrollTop } from '../ui/scroll_top/ScrollTop'

export const Layout = () => {
    return (
        <div>
            <Header />

            <div className="main">
                <Home/>

                <About/>

                <Skills/>

                <Qualification/>

                <Services/>

                <Portfolio/>

                <Project/>

                {/* <Testimonial/> */}

                <Contact/>
            </div>

            <Footer/>

            <ScrollTop />
        </div>
    )
}
