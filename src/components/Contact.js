import React, { useRef } from 'react';
import './Contact.css'
import Linkedin from '../assets/linkedin.svg'
import Github from '../assets/github.svg'
import Instagram from '../assets/instagram.svg'
import Facebook from '../assets/facebook.svg'
import emailjs from '@emailjs/browser';
import { Fade, Slide, Zoom } from "react-awesome-reveal"


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
        .sendForm("service_aslsj7y", "template_d6mzpeq", form.current, "EQfosFYWZiNDJYPA0")
        .then((result) => {
            console.log('SUCCESS!', result.text);
            e.target.reset();
            alert('Email Sent!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

return (
    <section id = 'contact'>
        <div id = 'social'>
            <Fade cascade damping={0.1}>
            <h1 className='socialTitle'>Socials</h1>
            <p className='socialDesc'>Here you can connect with me on my social media</p>
            </Fade>

            <div className='socialImgs'>

                <Slide>
                <a href='https://www.linkedin.com/in/nitin-singh-6a1085220/'><img src = {Linkedin} alt = 'Social' className='socialImg'/></a>
                <a href='https://github.com/Nitin-Singh-2002'><img src = {Github} alt = 'Social' className='socialImg'/></a>
                </Slide>

                <Slide direction='right'>
                <a href='https://www.instagram.com/nitinsingh3498/?next=%2F'><img src = {Instagram} alt = 'Social' className='socialImg'/></a>
                <a href='https://www.facebook.com/profile.php?id=100021415212998'><img src = {Facebook} alt = 'Social' className='socialImg'/></a>
                </Slide>

            </div>
        </div>

        <div id = 'contactPage'>
            <Fade cascade damping={0.1}>
            <h1 id = 'contactTitle'>Contact</h1>
            <span className = 'contactDesc'>Feel free to contact me</span>
            </Fade>

            <Zoom>
            <form className = 'contactForm' ref={form} onSubmit={sendEmail}>
            <input type = 'text' className = 'name' placeholder = 'Your Name' name = 'your_name'/>
            <input type = 'email' className = 'email' placeholder = 'Your Email' name = 'your_email'/>
            <textarea className = 'msg' name = 'message' rows= "5" placeholder = 'Your Message'></textarea>
            <button type = "submit" value="Send" className = 'submitBtn'>Submit</button>
            </form>
            </Zoom>
            
        </div>
    </section>
)
}

export default Contact
