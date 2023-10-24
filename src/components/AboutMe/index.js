import React from 'react'
import Keyboard from '../../assets/fonts/images/keyboard2.jpg'
import './index.scss'


function AboutMe() {
    return (
        <>
        <div className='about-page'>
            <div className='text-about'>
                <div className='about-title'>
                    <h1>About Me</h1>
                </div>
                <div className='about-container'>
                    <div className='about'>
                        <span>I've been learning coding languages and computer programming since July 20th, 2020. Since that time, i've learned C, C++, Python, JavaScript, HTML, CSS/SASS, ReactJS, ExpressJS, NodeJS, MongoDB, SQL/MySQL, Amazon cloud computing, networking and cybersecurity basics. Although i've mostly focused on projects revolving around Web Development and Javascript, I have a passion to learn other areas of programming. I have a bachelors degree in Psychology, but nothing Computer Science related. Most of my knowledge comes from self learning. I took all of Harvard's free CS50 courses, and The Odin Project as foundations for the skills I have today.</span>
                    </div>
                    <div className='about-image'>
                            <img src={Keyboard} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutMe
