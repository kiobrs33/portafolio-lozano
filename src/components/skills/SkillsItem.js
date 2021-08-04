import React, { useState } from 'react';

export const SkillsItem = ({title, description, icon, skills_data}) => {

    const [state, setState] = useState(false);

    return (
        <div 
            className={`skills__content ${state ? 'skills__open' : 'skills__close'}`}
            onClick={() => setState(!state)}
        >
            <div className="skills__header">
                <i className={`${icon} skills__icon`}></i>
                <div>
                    <h1 className="skills__title">{title}</h1>
                    <span className="skills__subtitle">{description}</span>
                </div>
                <i className="uil uil-angle-down skills__arrow"></i>
            </div>

            <div className="skills__list grid">
                {
                    skills_data.map(({name, percent}, index) => (
                        <div key={index} className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">{name}</h3>
                                <span className="skills__number">{percent}%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage skills__html"></span>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
