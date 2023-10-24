import React, { useRef } from 'react'
import './index.scss'
import emailjs from '@emailjs/browser';


function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qw9gaky', 'template_o7ht18n', form.current, 'CgwACuajPWzf4C6iE')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };

    return (
        <>
            <div className='contact-page'>
                <div className='text-contact'>
                        <div className='contact-words'>
                            <h1>Contact</h1>
                        </div>
                    <div className='contact-container'>
                        <div className='contact'>
                            <div className='question'>Have any questions? Message me below</div>
                            <div className='contact-form'>
                                <form ref={form} onSubmit={sendEmail}>
                                    <ul>
                                        <li className='half'>
                                            <input type="text" name="name" placeholder="Name" required />
                                        </li>
                                        <li>
                                            <input type="subject" name="subject" placeholder="Subject" required /> 
                                        </li>  
                                        <li>
                                            <textarea placeholder='Message' name='message' required></textarea>
                                        </li>  
                                        <li>
                                            <input type='submit' className='submit-btn' value='SEND' />
                                        </li>  
                                    
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
