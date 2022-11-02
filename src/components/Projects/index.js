import React from 'react'
import './index.scss'

function Projects() {
    return (
        <div className='container projects-page'>
            <div className='text'>
                <div className='projects'>
                    <div className='description-skill-container'>
                        <div className='description'>
                            <h3>Travel Brochure</h3>
                            <span>A travel preparation site that uses Openweather API to provide current weather, a flight API to give flight details, and mern stack crud app to share an experience someone has had at some location in the world. This app also uses Unsplash API to provide a random picture for whatever city users search for the weather of.</span>
                        </div>   
                        <div className='skills'>
                            <h2>Skills</h2>
                            <div className='list-skills'>
                                <div className='skill-divider'>
                                    <span>√</span>
                                    <h5>MongoDb</h5>
                                </div> 
                                <div className='skill-divider'>
                                    <span>√</span>
                                    <h5>Express</h5>
                                </div> 
                                <div className='skill-divider'>
                                    <span>√</span>
                                    <h5>React</h5>
                                </div> 
                                <div className='skill-divider'>
                                    <span>√</span>
                                    <h5>Node.js</h5>
                                </div> 
                                <div className='skill-divider'>
                                    <span>√</span>
                                    <h5>CSS</h5>
                                </div> 
                                <div className='skill-divider'>
                                    <span>√</span>
                                    <h5>Redux</h5>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Projects
