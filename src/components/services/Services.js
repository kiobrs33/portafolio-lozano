import React from 'react';
import { data } from '../../data/data';
import { ServiceItem } from './ServiceItem';

export const Services = () => {

    const { services } = data;

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Servicios</h2>
            <span className="section__subtitle">Lo que ofrezco</span>

            <div className="services__container container grid">

                {
                    services.map((item, index) => (
                        <ServiceItem
                            key={index}
                            title={item.title}
                            icon={item.icon}
                            points={item.points}
                        />
                    ))
                }

            </div>
        </section>
    )
}
