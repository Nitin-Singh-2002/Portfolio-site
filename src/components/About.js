import React from 'react'
import './About.css'
import Html from '../assets/HTML5_Badge.svg'
import Css from '../assets/css-3.svg'
import Js from '../assets/javascript.svg'
import Bootstrap from '../assets/bootstrap.png'
import react from '../assets/react.svg'




const About = () => {
return (
    <section id = 'about'>
        <span className='aboutTitle'>What I know</span>
        <span className='aboutDesc'>I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript.</span>
        <div className = 'aboutBars'>
            <div className='aboutBar'>
                <img src={Html} alt='Html' className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>HTML</h2>
                    <p>Hypertext Markup Language </p>
                </div>
            </div>

            <div className='aboutBar'>
                <img src={Css} alt='Css' className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>CSS</h2>
                    <p>Cascading Style Sheets</p>
                </div>
            </div>

            <div className='aboutBar'>
                <img src={Bootstrap} alt='Js' className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>Bootstrap</h2>
                    <p>Bootstrap</p>
                </div>
            </div>

            <div className='aboutBar'>
                <img src={Js} alt='Js' className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>JS</h2>
                    <p>Javascript</p>
                </div>
            </div>

            <div className='aboutBar'>
                <img src={react} alt='Js' className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>React</h2>
                    <p>React.Js</p>
                </div>
            </div>
        </div>
    </section>
)
}

export default About
