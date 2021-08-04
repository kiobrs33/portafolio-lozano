import React from 'react';

import { UilPhone } from '@iconscout/react-unicons';
import { UilEnvelope } from '@iconscout/react-unicons';
import { UilMapMarker } from '@iconscout/react-unicons';
import { UilMessage } from '@iconscout/react-unicons';

export const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch</span>

            <div className="contact__container container grid">
                <div className="contact__information">
                    <UilPhone className="contact__icon" />

                    <div>
                        <h3 className="contact__title">Call Me</h3>
                        <span className="contact__subtitle">987654321</span>  
                    </div>
                </div>

                <div className="contact__information">
                    <UilEnvelope className="contact__icon" />

                    <div>
                        <h3 className="contact__title">Email</h3>
                        <span className="contact__subtitle">example@gmail.com</span>  
                    </div>
                </div>

                <div className="contact__information">
                    <UilMapMarker className="contact__icon" />

                    <div>
                        <h3 className="contact__title">Location</h3>
                        <span className="contact__subtitle">Peru - Arequipa</span>  
                    </div>
                </div>

                <form className="contact__form grid">

                    <div className="contact__inputs grid">
                        <div className="contact__content">
                            <label  htmlFor="" className="contact__label" >Name</label>
                            <input  type="text" className="contact__input" />
                        </div>

                        <div className="contact__content">
                            <label  htmlFor="" className="contact__label" >Email</label>
                            <input  type="email" className="contact__input" />
                        </div>
                    </div>

                    <div className="contact__content">
                        <label  htmlFor="" className="contact__label" >Project</label>
                        <input  type="text" className="contact__input" />
                    </div>

                    <div className="contact__content">
                        <label  htmlFor="" className="contact__label" >Message</label>
                        <textarea  name="" cols="0" rows="7" className="contact__input" />
                    </div>

                    <div>
                        <button className="button button--flex" type="submit">
                            Send Message
                            <UilMessage className="button__icon" />
                        </button>
                    </div>                    
                </form>
            </div>
        </section>
    )
}
