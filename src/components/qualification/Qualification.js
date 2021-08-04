import React, { useState } from 'react';

export const Qualification = () => {

    const [tabs, setTabs] = useState(1);

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal journey</span>

            <div className="qualification__container container">

                <div className="qualification__tabs">
                    <div 
                        className="qualification__button button--flex"
                        onClick={ () => setTabs(1) }
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>
                    <div 
                        className="qualification__button button--flex"
                        onClick={ () => setTabs(2) }
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Work
                    </div>
                </div>


                <div className="qualification__sections">

                    {/* TAB 2 */}
                    <div 
                        className={tabs === 1 ? 'qualification__active' : 'qualification__close'}
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Compute Enginer</h3>
                                <span className="qualification__subtitle">Peru - University</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2009 - 2014
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Web Designer</h3>
                                <span className="qualification__subtitle">Brazil</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2007 - 2019
                                </div>
                            </div>
                        </div>


                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Developer</h3>
                                <span className="qualification__subtitle">Peru - Institute</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2009 - 2014
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Master Ui/Ux</h3>
                                <span className="qualification__subtitle">Peru - Institute</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2010 - 2021
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* TAB 2 */}
                    <div 
                        className={tabs === 2 ? 'qualification__active' : 'qualification__close'}
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Enginer</h3>
                                <span className="qualification__subtitle">Microsof - University</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2009 - 2014
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Fronted Designer</h3>
                                <span className="qualification__subtitle">Apple Ing</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2011 - 2021
                                </div>
                            </div>
                        </div>


                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Backend Developer</h3>
                                <span className="qualification__subtitle">Peru - Institute</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2018 - 2020
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
