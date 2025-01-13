import Travel from '../../../assets/fonts/images/Travel.png';
import './cloud.scss';

function TravelPrep() {
    return (
        <div className="cloud-trivia">
            <h1 className="cloud-words">Travel Prep - Your Ultimate Trip Planning Companion</h1>

            {/* Overview Section */}
            <section className="cloud-overview">
                <h2>Overview</h2>
                <p>
                    Travel Prep is a full-stack web application designed to help users efficiently plan and organize their trips.
                    It leverages AWS cloud services to provide a secure, scalable, and seamless user experience for itinerary 
                    management, flight tracking, and travel planning.
                </p>
            </section>

            {/* Architecture Diagram */}
            <section className="cloud-architecture">
                <h2>Architecture Diagram</h2>
                <img src={Travel} alt="Architecture Diagram" className="architecture-image" />
            </section>

            {/* Key Features */}
            <section className="key-features">
                <h2>Key Features</h2>

                <div className="feature">
                    <h3>Trip Itinerary Management</h3>
                    <span>
                        Users can create and manage detailed travel plans, including destinations, tasks, and deadlines.
                    </span>
                </div>

                <div className="feature">
                    <h3>Seamless Deployment</h3>
                    <span>
                        The React frontend is hosted on AWS Elastic Beanstalk, ensuring fast, scalable delivery.
                    </span>
                </div>

                <div className="feature">
                    <h3>Dynamic Backend</h3>
                    <span>
                        The Express.js backend is deployed via AWS Elastic Beanstalk to handle trip data and API logic.
                    </span>
                </div>
            </section>

            {/* AWS Services Used */}
            <section className="aws-services">
                <h2>AWS Services Used</h2>
                <span>AWS Elastic Beanstalk: Manages the deployment of the Express.js backend.</span><br />
                <span>Amazon Route 53: Provides DNS configuration for a custom domain.</span><br />
                <span>AWS Certificate Manager (ACM): Enables secure HTTPS access with SSL/TLS certificates.</span><br />
            </section>

            {/* Tech Stack */}
            <section className="tech-stack">
                <h2>Tech Stack</h2>
                <span><strong>Frontend:</strong> React</span><br />
                <span><strong>Backend:</strong> Express.js (AWS Elastic Beanstalk)</span><br />
                <span><strong>Database:</strong> MongoDB Atlas</span><br />
                <span><strong>Custom DNS & SSL:</strong> Amazon Route 53 and ACM</span>
            </section>

            {/* Deployment Highlights */}
            <section className="deployment">
                <h2>Deployment Highlights</h2>
                <span><strong>Frontend:</strong> Deployed on AWS Amplify for fast, scalable hosting.</span><br />
                <span><strong>Backend:</strong> Deployed via AWS Elastic Beanstalk to provide API logic and scalability.</span><br />
                <span><strong>Database:</strong> MongoDB Atlas for secure and reliable data storage.</span><br />
                <span><strong>Secure Communication:</strong> Enabled HTTPS with AWS Certificate Manager.</span>
            </section>

            {/* Outcome */}
            <section className="outcome">
                <h2>Outcome</h2>
                <p>
                    Travel Prep demonstrates a cloud-first architecture with a focus on scalability, security, and seamless user experience. 
                    It showcases the ability to integrate AWS services for both frontend and backend deployments, highlighting expertise 
                    in modern web application development.
                </p>
            </section>

            {/* Conclusion Links */}
            <section className="cloud-links">
                <h2>Conclusion</h2>
                <p>
                    <a href="#" target="_blank" rel="noreferrer">GitHub Repository</a> | 
                    <a href="#" target="_blank" rel="noreferrer">Deployed Application</a>
                </p>
            </section>
        </div>
    );
}

export default TravelPrep;
