import React, { useState } from 'react'
import './index.scss'
import Keyboard from '../../assets/fonts/images/Final.png'
import Keyboard1 from '../../assets/fonts/images/pics.png'
import Trivia from '../../assets/fonts/images/Triviafront.png'
import Picture from './picture'
import CloudTrivia from './cloud/trivia';
import ClipFlow from './cloud/clipflow';
import Travel from './cloud/travel';

function Projects() {
    const [pic, setPic] = useState(null)
    const [view, setView] = useState(false)
    const [showCloudModal, setShowCloudModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);


    const openCloudModal = () => {
        setShowCloudModal(true);
    };

    const closeCloudModal = () => {
        setShowCloudModal(false);
    };

    // Open Trivia Cloud Modal
    const openTriviaCloudModal = () => {
        setModalContent(<CloudTrivia />);
        setShowCloudModal(true);
    };

    // Open ClipFlow Cloud Modal
    const openClipFlowCloudModal = () => {
        setModalContent(<ClipFlow />);
        setShowCloudModal(true);
    };
    
    // Open Travel Cloud Modal
    const openTravelCloudModal = () => {
        setModalContent(<Travel />);
        setShowCloudModal(true);
    };



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
                    <div className='projects-container-flip'>
                <div className='project-image'>
                        <img src={Trivia} alt='trivia' onClick={handleClick} />
                </div>
                <div className='projects'>
                    <div className='description-skill-container'>
                        <div className='description'>
                        <h1>Trivia App</h1>

                        <span>A full stack trivia game, that has React as the front end hosted on AWS Amplify. The back end is deployed on AWS Lambda, and connects through AWS API Gateway. OpenAI API is used to generate dynamic questions, and answer options through Lambda. AWS DynamoDB is the database for collecting and displaying players scores, and AWS Cognito is used for authentication. The game requires authentication...<br/><div style={{fontStyle: 'normal', color: 'rgb(233, 233, 4)'}}>Username: test <br/>Password: test</div></span>
                        </div>   
                        <div className='skills'>
                            <h2>Skills</h2>
                            <div className='list-skills'>
                                <div className='skill-divider'>
                                    <span>√</span>
                                    <h5>AWS Lambda</h5>
                                </div> 
                                <div className='skill-divider'>
                                    <span>√</span>
                                    <h5>AWS Cognito</h5>
                                </div> 
                                <div className='skill-divider'>
                                    <span>√</span>
                                    <h5>AWS API Gateway</h5>
                                </div> 
                                <div className='skill-divider'>
                                    <span>√</span>
                                    <h5>React</h5>
                                </div> 
                                <div className='skill-divider'>
                                    <span>√</span>
                                    <h5>AWS Amplify</h5>
                                </div> 
                                <div className='skill-divider'>
                                    <span>√</span>
                                    <h5>OpenAI API</h5>
                                </div> 
                            </div>
                            <div className='project-links'>
                                <ul>
                                    <li>
                                        <a target="_blank" rel="noreferrer" href="http://travelprep.us-east-2.elasticbeanstalk.com">
                                            View App
                                        </a>
                                    </li>
                                    <li className='linked'>
                                        <a target="_blank" rel="noreferrer" href="https://github.com/ProperPoe/LandPage-app">
                                            View Code
                                        </a>
                                    </li>
                                    
                                    <button onClick={openTriviaCloudModal} className="cloud-btn">Cloud</button>

                                    
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
                            <h1>ClipFlow</h1>
                            <span>ClipFlow is a video and image storage site, that is also used as a social media app with comments, likes, and notifcations. It uses AWS RDS for the database, and AWS Elastic beanstalk for the Express back end. AWS S3 is used for the React front end static hosting, and media storage. The S3 static content is distributed via AWS Cloudfront, with AWS Route 53 providing DNS. The app requires authentication... <br/><div style={{fontStyle: 'normal', color: 'rgb(233, 233, 4)'}}>Username: test <br/>Password: test</div> </span>
                            {/* <span>ClipFlow is a video and image file storage site, that is also used as a social media app with ways to interact with the media, with comments, likes, and notifcations. I used MySQL for the database, and Amazon S3 cloud bucket for the media storage. The URL from the s3 bucket is stored in the database, and used for API retrieval. The app requires authentication, use the test user below... <br/><div style={{fontStyle: 'normal', color: 'rgb(233, 233, 4)'}}>Username: test <br/>Password: test</div> </span> */}
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
                                    <h5>AWS S3</h5>
                                </div> 
                                <div className='skill-divider'>
                                    <span>√</span>
                                    <h5>MaterialUI</h5>
                                </div> 
                                <div className='skill-divider'>
                                    <span>√</span>
                                    <h5>AWS Route 53</h5>
                                </div> 
                                <div className='skill-divider'>
                                    <span>√</span>
                                    <h5>AWS API Gateway</h5>
                                </div> 
                                <div className='skill-divider'>
                                    <span>√</span>
                                    <h5>AWS Elastic Beanstalk</h5>
                                </div> 
                                <div className='skill-divider'>
                                    <span>√</span>
                                    <h5>AWS RDS</h5>
                                </div> 
                                <div className='skill-divider'>
                                    <span>√</span>
                                    <h5>AWS Cloudfront</h5>
                                </div> 
                                <div className='skill-divider'>
                                    <span>√</span>
                                    <h5>AWS Certificate Manager</h5>
                                </div> 
                            </div>
                            
                        </div>
                        <div className='project-links'>
                                <ul>
                                <li>
                                        <a target="_blank" rel="noreferrer" href="https://clipflowapp.com">
                                            View App
                                        </a>
                                    </li>
                                    <li className='linked'>
                                        <a target="_blank" rel="noreferrer" href="https://github.com/ProperPoe/videoStorage-app.github.io">
                                            View Code
                                        </a>
                                    </li>
                                    
                                    <button onClick={openClipFlowCloudModal} className="cloud-btn">Cloud</button>

                                    
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
                                        <a target="_blank" rel="noreferrer" href="http://travelprep.us-east-2.elasticbeanstalk.com">
                                            View App
                                        </a>
                                    </li>
                                    <li className='linked'>
                                        <a target="_blank" rel="noreferrer" href="https://github.com/ProperPoe/LandPage-app">
                                            View Code
                                        </a>
                                    </li>
                                    

                                    <button onClick={openTravelCloudModal} className="cloud-btn">Cloud</button>
                                    
                                    
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
                    {/* Cloud Modal */}
        {showCloudModal && (
            <div className="modal-overlay">
                <div className="modal-content">
                    <button onClick={closeCloudModal} className="close-modal">X</button>
                    {modalContent}
                </div>
            </div>
        )}

        </>
    )
}

export default Projects
