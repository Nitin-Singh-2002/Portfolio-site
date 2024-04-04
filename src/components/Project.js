import React from 'react'
import './Project.css'
import Profile from '../assets/Site.PNG'
import bootstrap from '../assets/bootstrap.png'
import Disney from '../assets/images.jpg'
import Zomato from '../assets/zomato.jpg'


const Project = () => {
return (
    <div>
        <section id = "project">
            <h2 className='projectTitle'>My Project</h2>
            <span className='projectDesc'>Here are my projects</span>
            {/* <div className='projectImgs'>
            <img src={Profile} alt='Profile' className='projectImg'/>
            <img src= {bootstrap} alt='Bootstrap' className='projectImg'/>
            <img src= {Disney} alt='Disney' className='projectImg'/>
            <img src= {Zomato} alt='Zomato' className='projectImg'/>
            </div> */}
            <div className ="project-item">
            <div className ="item-details">
                <p className ="P1">Profile Card</p>
                <p className="P2">TechStack:- HTML and CSS</p>
            </div>
            <a href="https://github.com/Nitin-Singh-2002/Profile-Card"><img src= {Profile} alt="Profile-Card" className="projectImg" img/></a>
        </div>
        <div className="project-item">
            <div className="item-details">
                <p className="P1">Login-Page</p>
                <p className="P2">TechStake:- HTML, CSS and Bootstrap</p>
            </div>
            <a href="https://github.com/Nitin-Singh-2002/Login-Page"><img src= {bootstrap} alt="Login-page" className="projectImg" img/></a>
        </div>

        <div className="project-item">
            <div className="item-details">
                <p className="P1">Zomato-Clone</p>
                <p className="P2">TechStake:- HTML and CSS</p>
            </div>
            <a href="https://github.com/Nitin-Singh-2002/Zomato-Landing-Page"><img src= {Zomato} alt="Zomato-Clone" className="projectImg" img/></a>
        </div>

        <div className="project-item">
            <div className="item-details">
                <p className="P1">Disney-Clone</p>
                <p className="P2">TechStack:- HTML, CSS and JavaScript</p>
            </div>
            <a href="https://github.com/Nitin-Singh-2002/Disney--Landing-Page"><img src= {Disney} alt="Disney-Clone" className="projectImg" img/></a>
        </div>

        </section>
    </div>
)
}

export default Project
