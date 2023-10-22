import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <>
        <div className='container home-page'>
            <div className='text'>
                <h1>Hello, i'm Steven Trujillo</h1>
                <h3>Web Developer</h3>
                <div className='links'>
                    <Link to="/projects"className='flat-button'>See My Work</Link>
                    <Link to="/contact" className='flat-button2'>Contact Me</Link>
                </div>
            </div>
            
         </div>
        </>
    )
}

export default Home
