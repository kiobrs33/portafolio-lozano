import React from 'react';

import { SkillsItem } from './SkillsItem';
import { data } from '../../data/data';

export const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Tecnical Level</span>
            <div className="skills__container container grid">
                {
                    data.skills.map(({ skill_title, skill_time, skill_icon, subskills }, index) => (
                        <SkillsItem
                            key={index}
                            title={skill_title}
                            description={skill_time}
                            icon={skill_icon}
                            skills_data={subskills}
                        />
                    ))
                }
            </div>
        </section>
    )
}
