import React from 'react'
import Keyboard from '../../assets/fonts/images/keyboard2.jpg'
import './index.scss'


function AboutMe() {
    return (
        <>
        <div className='about-page'>
        <div className='text-project'>
                    <div className='about-title'>
                        <h1>About Me</h1>
                    </div>
                <div className='projects-container'>
                <div className='about'>
                    <span>I've been learning coding languages and computers programming since July 20th, 2020. Since that time, i've learned C, C++, Python, JavaScript, HTML, CSS/SASS, ReactJS, ExpressJS, NodeJS, and MongoDB. Although i've mostly focused on projects revolving Web Development and Javascript, I have a passion to learn other areas of programming. I have an associates degree in Psychology, but nothing Computer Science related. Most of my knowledge comes from self learning. I took all of Harvard's free CS50 courses as a foundation for the skills I have today.</span>
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
