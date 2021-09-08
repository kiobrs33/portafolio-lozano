import React, { useState } from 'react';
import { data } from '../../data/data';

export const Qualification = () => {

    const [tabs, setTabs] = useState(1);

    const { education, works } = data;
    return (
        <section className="qualification section">
            <h2 className="section__title">Calificación</h2>
            <span className="section__subtitle">Mi eduación y experiencia personal</span>

            <div className="qualification__container container">

                <div className="qualification__tabs">
                    <div
                        className="qualification__button button--flex"
                        onClick={() => setTabs(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Educación
                    </div>
                    <div
                        className="qualification__button button--flex"
                        onClick={() => setTabs(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Trabajos
                    </div>
                </div>


                <div className="qualification__sections">

                    {/* TAB 2 */}
                    <div
                        className={tabs === 1 ? 'qualification__active' : 'qualification__close'}
                    >
                        {
                            education.map((item, index) => {
                                if (index % 2 === 0 && index !== education.length - 1) {
                                    if (index === 0) {
                                        return (
                                            <div className="qualification__data" key={index}>
                                                <div>
                                                    <h3 className="qualification__title">{item.profession}</h3>
                                                    <span className="qualification__subtitle">{item.description}</span>

                                                    <div className="qualification__calendar">
                                                        <i className="uil uil-calendar-alt"></i>
                                                        {`${item.time_starting} - ${item.time_end}`}
                                                    </div>
                                                </div>

                                                <div>
                                                    <span className="qualification__rounder"></span>
                                                    <span className="qualification__line"></span>
                                                </div>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div className="qualification__data" key={index}>
                                                <div>
                                                    <h3 className="qualification__title">{item.profession}</h3>
                                                    <span className="qualification__subtitle">{item.description}</span>

                                                    <div className="qualification__calendar">
                                                        <i className="uil uil-calendar-alt"></i>
                                                        {`${item.time_starting} - ${item.time_end}`}
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="qualification__rounder"></span>
                                                    <span className="qualification__line"></span>
                                                </div>
                                            </div>
                                        )
                                    }

                                } else {
                                    if (index === education.length - 1) {

                                        if (index % 2 === 0) {
                                            return (
                                                <div className="qualification__data" key={index}>
                                                    <div>
                                                        <h3 className="qualification__title">{item.profession}</h3>
                                                        <span className="qualification__subtitle">{item.description}</span>

                                                        <div className="qualification__calendar">
                                                            <i className="uil uil-calendar-alt"></i>
                                                            {`${item.time_starting} - ${item.time_end}`}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="qualification__rounder"></span>
                                                    </div>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div className="qualification__data" key={index}>
                                                    <div></div>
                                                    <div>
                                                        <span className="qualification__rounder"></span>
                                                    </div>
                                                    <div>
                                                        <h3 className="qualification__title">{item.profession}</h3>
                                                        <span className="qualification__subtitle">{item.description}</span>

                                                        <div className="qualification__calendar">
                                                            <i className="uil uil-calendar-alt"></i>
                                                            {`${item.time_starting} - ${item.time_end}`}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    } else {
                                        return (
                                            <div className="qualification__data" key={index}>
                                                <div></div>
                                                <div>
                                                    <span className="qualification__rounder"></span>
                                                    <span className="qualification__line"></span>
                                                </div>
                                                <div>
                                                    <h3 className="qualification__title">{item.profession}</h3>
                                                    <span className="qualification__subtitle">{item.description}</span>

                                                    <div className="qualification__calendar">
                                                        <i className="uil uil-calendar-alt"></i>
                                                        {`${item.time_starting} - ${item.time_end}`}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                }

                            })
                        }
                    </div>

                    {/* TAB 2 */}
                    <div
                        className={tabs === 2 ? 'qualification__active' : 'qualification__close'}
                    >
                        {
                            works.map((item, index) => {
                                if (index % 2 === 0 && index !== works.length - 1) {
                                    if (index === 0) {
                                        return (
                                            <div className="qualification__data" key={index}>
                                                <div>
                                                    <h3 className="qualification__title">{item.job}</h3>
                                                    <span className="qualification__subtitle">{item.description}</span>

                                                    <div className="qualification__calendar">
                                                        <i className="uil uil-calendar-alt"></i>
                                                        {`${item.time_starting} - ${item.time_end}`}
                                                    </div>
                                                </div>

                                                <div>
                                                    <span className="qualification__rounder"></span>
                                                    <span className="qualification__line"></span>
                                                </div>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div className="qualification__data" key={index}>
                                                <div>
                                                    <h3 className="qualification__title">{item.job}</h3>
                                                    <span className="qualification__subtitle">{item.description}</span>

                                                    <div className="qualification__calendar">
                                                        <i className="uil uil-calendar-alt"></i>
                                                        {`${item.time_starting} - ${item.time_end}`}
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="qualification__rounder"></span>
                                                    <span className="qualification__line"></span>
                                                </div>
                                            </div>
                                        )
                                    }

                                } else {
                                    if (index === works.length - 1) {

                                        if (index % 2 === 0) {
                                            return (
                                                <div className="qualification__data" key={index}>
                                                    <div>
                                                        <h3 className="qualification__title">{item.job}</h3>
                                                        <span className="qualification__subtitle">{item.description}</span>

                                                        <div className="qualification__calendar">
                                                            <i className="uil uil-calendar-alt"></i>
                                                            {`${item.time_starting} - ${item.time_end}`}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="qualification__rounder"></span>
                                                    </div>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div className="qualification__data" key={index}>
                                                    <div></div>
                                                    <div>
                                                        <span className="qualification__rounder"></span>
                                                    </div>
                                                    <div>
                                                        <h3 className="qualification__title">{item.job}</h3>
                                                        <span className="qualification__subtitle">{item.description}</span>

                                                        <div className="qualification__calendar">
                                                            <i className="uil uil-calendar-alt"></i>
                                                            {`${item.time_starting} - ${item.time_end}`}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    } else {
                                        return (
                                            <div className="qualification__data" key={index}>
                                                <div></div>
                                                <div>
                                                    <span className="qualification__rounder"></span>
                                                    <span className="qualification__line"></span>
                                                </div>
                                                <div>
                                                    <h3 className="qualification__title">{item.job}</h3>
                                                    <span className="qualification__subtitle">{item.description}</span>

                                                    <div className="qualification__calendar">
                                                        <i className="uil uil-calendar-alt"></i>
                                                        {`${item.time_starting} - ${item.time_end}`}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                }

                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
