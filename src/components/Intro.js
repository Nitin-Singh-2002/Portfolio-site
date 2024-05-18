import React from "react";
import "./Intro.css";
// import bg from '../assets/image.png';
import btnImg from "../assets/hireme.png";
import reactLogo from "../assets/react.svg"
import Html from "../assets/HTML5_Badge.svg"
import Css from "../assets/css-3.svg"
import Bootstrap from "../assets/bootstrap-4.svg"
import Js from "../assets/javascript.svg"
import { Link } from "react-scroll";
import { Fade } from "react-awesome-reveal"

const Intro = () => {
    const logos = document.querySelectorAll(".logo");

    logos.forEach((logo, index) => {
        logo.style.animation = `rotate 6s linear infinite ${index * 2}s`;
    });

    return (
        <section id="intro">
            <Fade cascade damping={0.1}>
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">
                    I'm <span className="introName">Nitin</span>
                    <br />
                    Web Developer
                </span>
                <p className="introPara">
                    I am a skilled web developer with experience in creating
                    <br />
                    visually appealing and user friendly websites.
                </p>
                <Link>
                    <button className="btn2">
                        <img src={btnImg} alt="Img" className="btnImg2" />
                        Hire Me
                    </button>
                </Link>
            </div>
            </Fade>

            {/* <img src = {bg} alt = 'Profile' className='bg'/> */}

            <img src = {Html} className="html" alt = "HTML"/>

            <img src = {Css} className="css" alt = "CSS"/>

            <img src = {Bootstrap} className="boot" alt = "BootStrap"/>

            <img src = {Js} className="js" alt = "JavaScript"/>

            <img src={reactLogo} className="logo2" alt="React logo" />
            
        </section>
    );
};

export default Intro;
