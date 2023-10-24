import React, { useState } from 'react'
import './index.scss'
import Keyboard from '../../assets/fonts/images/Final.png'
import Keyboard1 from '../../assets/fonts/images/pics.png'
import Picture from './picture'

function Projects() {
    const [pic, setPic] = useState(null)
    const [view, setView] = useState(false)

    const handleClick = (e) => {
        setView(true)
        setPic(e.target.alt)
    }

    const closeModal = () => {
        setView(false);
        setPic(null);
    }
    

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
                            <h1>ClipFlow</h1>
                            <span>ClipFlow is a video and image file storage site, that is also used as a social media app with ways to interact with the media, with comments, likes, and notifcations. I used MySQL for the database, and Amazon S3 cloud bucket for the media storage. The URL from the s3 bucket is stored in the database, and used for API retrieval. The app requires authentication, use the test user below... <br/><div style={{fontStyle: 'normal', color: 'rgb(233, 233, 4)'}}>Username: test <br/>Password: test</div> </span>
                            {/* <span>A travel preparation site that uses Openweather API to provide current weather, a flight API to give flight details, and mern stack crud app to share an experience someone has had at some location in the world. This app also uses Unsplash API to provide a random picture for whatever city users search for the weather of.</span> */}
                        </div>   
                        <div className='skills'>
                            <h2>Skills</h2>
                            <div className='list-skills'>
                                <div className='skill-divider'>
                                    <span>√</span>
                                    <h5>MySQL</h5>
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
                                    <h5>Tailwind</h5>
                                </div> 
                                <div className='skill-divider'>
                                    <span>√</span>
                                    <h5>Redux</h5>
                                </div> 
                                <div className='skill-divider'>
                                    <span>√</span>
                                    <h5>Typescript</h5>
                                </div> 
                                <div className='skill-divider'>
                                    <span>√</span>
                                    <h5>AmazonS3</h5>
                                </div> 
                                <div className='skill-divider'>
                                    <span>√</span>
                                    <h5>MaterialUI</h5>
                                </div> 
                            </div>
                            
                        </div>
                        <div className='project-links'>
                                <ul>
                                <li>
                                        <a target="_blank" rel="noreferrer" href="https://clip-flow-c44deb5c5c24.herokuapp.com/">
                                            View App
                                        </a>
                                    </li>
                                    <li className='linked'>
                                        <a target="_blank" rel="noreferrer" href="https://github.com/ProperPoe/videoStorage-app.github.io">
                                            View Code
                                        </a>
                                    </li>

                                </ul> 
                            </div>
                    </div>
                </div>
                <div className='project-image'>
                        <img src={Keyboard} alt='clipflow' value="1" onClick={handleClick}/>
                </div>
            </div>
            <div className='projects-container-flip'>
                <div className='project-image'>
                        <img src={Keyboard1} alt='travel' onClick={handleClick} />
                </div>
                <div className='projects'>
                    <div className='description-skill-container'>
                        <div className='description'>
                        <h1>Travel Brochure</h1>
                        {/* <span>ClipFlow is a video and image file storage site, that is also used as a social media app with ways to interact with the media, with comments, likes, and notifcations. I used MySQL for the database, and Amazon S3 cloud bucket for the media storage. The URL from the s3 bucket is stored in the database, and used for API retrieval. The app requires authentication, use the test user below... <br/><div style={{fontStyle: 'normal', color: 'rgb(233, 233, 4)'}}>Username: test <br/>Password: test</div> </span> */}
                        {/* <span>ClipFlow is a video and image file storage site, that is also used as a social media app with ways to interact with the media, with comments, likes, and notifcations. I used MySQL for the database, and Amazon S3 cloud bucket for the media storage. The URL from the s3 bucket is stored in the database, and used for API retrieval. The app requires authentication, use the test user below... <br/><div style={{fontStyle: 'normal', color: 'rgb(233, 233, 4)'}}>Username: test <br/>Password: test</div> </span> */}

                        <span>A travel brochure site that uses Openweather API to provide current weather, AviationStack API to give flight details, and a MERN stack crud app for users to share photographic experiences. This app also uses Unsplash API to provide a dynamic random background picture on the weather page, for whatever city is entered into the search. If a city isn't entered, a background image is still retreived based on the keyword, but no weather data. I used MongoDB for the Experiences database.</span>
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
                                        <a target="_blank" rel="noreferrer" href="https://travel-prep-290b6c1204c7.herokuapp.com">
                                            View App
                                        </a>
                                    </li>
                                    <li className='linked'>
                                        <a target="_blank" rel="noreferrer" href="https://github.com/ProperPoe/LandPage-app">
                                            View Code
                                        </a>
                                    </li>
                                </ul> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='projects-container'>
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
            </div> */}
            </div>
        </div>
        {view === true ? <Picture pic={pic} closeModal={closeModal} /> : ""}
        </>
    )
}

export default Projects
