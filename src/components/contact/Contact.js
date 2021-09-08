import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {

    const [modal, setModal] = useState(false);
    const [resEmail, setResEmail] = useState('');

    const initState = {
        client_name: '',
        client_email: '',
        client_project: '',
        client_message: '',
    };

    const [formValues, setFormValues] = useState(initState);

    const {client_name, client_email, client_message, client_project} = formValues;

    const handleInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name] : target.value,
        });
    }

    const sendEmail = (e) => {
        e.preventDefault();

        if(client_name !== '' && client_project !== '' && client_message !== '' && client_email !== ''){
            emailjs
                .sendForm('service_77qr24c', 'template_wxv0kyb', e.target , 'user_EreIGZ7TwLS7Yhfg8maiO')
                .then((result) => {  
                    setResEmail('Se envio correctamente');
                }, (error) => {
                    setResEmail('No se pudo enviar');
                });
            
            setResEmail('Enviando...')
            setModal(true);
            setFormValues(initState);
            e.target.reset();
        } 
    }

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contactame</h2>
            <span className="section__subtitle">Ponerse en contacto</span>

            <div className="contact__container container grid">
                <div className="contact__information">
                    <i className="uil uil-phone contact__icon"></i>

                    <div>
                        <h3 className="contact__title">Llamame</h3>
                        <span className="contact__subtitle">978111166</span>
                    </div>
                </div>

                <div className="contact__information">
                    <i className="uil uil-envelope contact__icon"></i>

                    <div>
                        <h3 className="contact__title">Correo</h3>
                        <span className="contact__subtitle">rene.lzr.20@gmail.com</span>
                    </div>
                </div>

                <div className="contact__information">
                    <i className="uil uil-map-marker contact__icon"></i>

                    <div>
                        <h3 className="contact__title">Locación</h3>
                        <span className="contact__subtitle">Peru - Arequipa</span>
                    </div>
                </div>

                {/* Modal */}
                <div className={modal ? 'services__modal active-modal' : 'services__modal'}>
                    <div className="services__modal-content">
                        <h4 className="services__modal-title">Alerta!</h4>
                        <i
                            className="uil uil-times services__modal-close"
                            onClick={() => setModal(false)}
                        ></i>

                        <ul className="services__modal-services">
                            <li className="services__modal-service">
                                <p>{resEmail} </p>
                            </li>
                        </ul>
                    </div>
                </div>
                
                

                {/* Form SEND EMAIL */}
                <form className="contact__form grid" onSubmit={sendEmail}>

                    <div className="contact__inputs grid">
                        <div className="contact__content">
                            <label htmlFor="" className="contact__label" >Nombre</label>
                            <input 
                                type="text" 
                                className="contact__input" 
                                autoComplete="off"
                                name="client_name"
                                value={client_name}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="contact__content">
                            <label htmlFor="" className="contact__label" >Correo</label>
                            <input 
                                type="email" 
                                className="contact__input" 
                                autoComplete="off"
                                name="client_email"
                                value={client_email}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="contact__content">
                        <label htmlFor="" className="contact__label" >Proyecto</label>
                        <input 
                            type="text" 
                            className="contact__input" 
                            autoComplete="off"
                            name="client_project"
                            value={client_project}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="contact__content">
                        <label htmlFor="" className="contact__label" >Mensaje</label>
                        <textarea 
                            cols="0" 
                            rows="7" 
                            className="contact__input textarea"
                            autoComplete="off"
                            name="client_message"
                            value={client_message}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <button className="button button--flex" type="submit">
                            Enviar Mensaje
                            <i className="uil uil-message button__icon"></i>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}
