import React from 'react'
import './index.scss'
import Keyboard from '../../assets/fonts/images/keyboard2.jpg'
import Keyboard1 from '../../assets/fonts/images/binary.jpg'

function Projects() {
    return (
        <>
        <div className='projects-page'>
            <div className='text-project'>
                    <div className='title'>
                        <h1>Projects</h1>
                    </div>
                <div className='projects-container'>
                <div className='projects'>
                    <div className='description-skill-container'>
                        <div className='description'>
                            <h1>Travel Brochure</h1>
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
                        <div className='project-links'>
                                <ul>
                                    <li>
                                        <a target="_blank" rel="noreferrer" href="https://github.com/ProperPoe">
                                            View App
                                        </a>
                                    </li>
                                    <li className='linked'>
                                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/">
                                            View Code
                                        </a>
                                    </li>
                                </ul> 
                            </div>
                    </div>
                </div>
                <div className='project-image'>
                        <img src={Keyboard} />
                </div>
            </div>
            <div className='projects-container-flip'>
                <div className='project-image'>
                        <img src={Keyboard1} />
                </div>
                <div className='projects'>
                    <div className='description-skill-container'>
                        <div className='description'>
                            <h1>E-Commerce</h1>
                            <span>A travel preparation site something about some boyy ya know time or so i dont really know</span>
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
                            <div className='project-links'>
                                <ul>
                                    <li>
                                        <a target="_blank" rel="noreferrer" href="https://github.com/ProperPoe">
                                            View App
                                        </a>
                                    </li>
                                    <li className='linked'>
                                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/">
                                            View Code
                                        </a>
                                    </li>
                                </ul> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='projects-container'>
                <div className='projects'>
                    <div className='description-skill-container'>
                        <div className='description'>
                            <h1>Travel Brochure</h1>
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
                            <div className='project-links'>
                                <ul>
                                    <li>
                                        <a target="_blank" rel="noreferrer" href="https://github.com/ProperPoe">
                                            View App
                                        </a>
                                    </li>
                                    <li className='linked'>
                                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/">
                                            View Code
                                        </a>
                                    </li>
                                </ul> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className='project-image'>
                        <img src={Keyboard} />
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Projects
