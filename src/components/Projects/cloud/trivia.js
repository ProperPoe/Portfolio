import FinalTrivia from '../../../assets/fonts/images/FinalTrivia.png';
import LambdaTrivia1 from '../../../assets/fonts/images/lambdaTrivia1.png';
import LambdaTrivia2 from '../../../assets/fonts/images/lambdaTrivia2.png';
import LambdaTrivia3 from '../../../assets/fonts/images/lambdaTrivia3.png';

import './cloud.scss';

function Trivia() {
    return (
        <div className="cloud-trivia">
            <h1 className="cloud-words">Trivia Game - Cloud-Powered Trivia Quiz Application</h1>

            <section className="cloud-overview">
                <h2>Overview</h2>
                <p>
                    The Trivia Game is a full-stack serverless application that delivers an interactive quiz experience to users.
                    It showcases seamless integration of AWS services with React, OpenAI, and DynamoDB to provide dynamic trivia questions,
                    secure user authentication, score tracking, and real-time leaderboards. This project demonstrates scalable architecture,
                    efficient serverless computing, and effective use of modern cloud solutions.
                </p>
            </section>

            <section className="cloud-architecture">
                <h2>Architecture Diagram</h2>
                <img src={FinalTrivia} alt="Architecture Diagram" className="architecture-image" />
            </section>

            <section className="key-features">
                <h2>Key Features</h2>
                <div className="feature">
                    <h3>Dynamic Trivia Question Generation</h3>
                    <p><strong>Service:</strong> AWS Lambda + OpenAI API</p>
                    <p>Trivia questions are dynamically generated at runtime using OpenAI’s GPT-3.5 Turbo API.</p>
                    <p>Lambda securely uses the OpenAI API key via environment variables.</p>
                    <p>Questions include 4 randomized multiple-choice answers for a diverse and engaging experience.</p>
                    <h4>Code Summary:</h4>
                    <img src={LambdaTrivia3} alt="Trivia Questions Lambda Code" className="lambda-code" />
                </div>

                <div className="feature">
                    <h3>Leaderboard Management</h3>
                    <p><strong>Service:</strong> AWS Lambda + DynamoDB</p>
                    <p>Scores are stored in Amazon DynamoDB in a structured format (UserID, Score, Timestamp).</p>
                    <p>Leaderboard displays scores in descending order, retaining only the highest score for each user.</p>
                    <h4>Code Summary:</h4>
                    <div className="code-summary">
                        <div>
                            <h5>TOP HALF</h5>
                            <img src={LambdaTrivia1} alt="Leaderboard Code Top Half" className="lambda-code half" />
                        </div>
                        <div>
                            <h5>BOTTOM HALF</h5>
                            <img src={LambdaTrivia2} alt="Leaderboard Code Bottom Half" className="lambda-code half" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="aws-services">
                <h2>AWS Services Used</h2>
                <div>
                    <p>AWS Lambda - Handles trivia generation and leaderboard management.</p>
                    <p>Amazon API Gateway - Exposes Lambda endpoints for GET and POST requests.</p>
                    <p>Amazon DynamoDB - Stores and retrieves leaderboard data.</p>
                    <p>AWS Cognito - Provides secure user authentication.</p>
                    <p>AWS Amplify - Deploys and hosts the frontend.</p>
                    <p>OpenAI API - Dynamically generates trivia questions via GPT-3.5 Turbo.</p>
                </div>
            </section>

            <section className="tech-stack">
                <h2>Tech Stack</h2>
                <div>
                    <p><strong>Frontend:</strong> React, TypeScript</p>
                    <p><strong>Backend:</strong> Node.js (AWS Lambda)</p>
                    <p><strong>Database:</strong> Amazon DynamoDB</p>
                    <p><strong>Authentication:</strong> AWS Cognito</p>
                    <p><strong>API Management:</strong> Amazon API Gateway</p>
                    <p><strong>Hosting:</strong> AWS Amplify</p>
                    <p><strong>AI Integration:</strong> OpenAI API</p>
                </div>
            </section>

            <section className="deployment">
                <h2>Deployment Highlights</h2>
                <div>
                    <p><strong>Frontend:</strong> Deployed on AWS Amplify.</p>
                    <p><strong>Backend:</strong> Deployed as AWS Lambda functions and integrated with API Gateway.</p>
                    <p><strong>Database:</strong> DynamoDB for real-time storage of user scores.</p>
                    <p><strong>Authentication:</strong> Secure login via AWS Cognito.</p>
                </div>
            </section>

            <section className="outcome">
                <h2>Outcome and AWS Showcase</h2>
                <p>
                    The Trivia Game demonstrates:
                </p>
                <div>
                    <p>Scalable, serverless architecture leveraging AWS services.</p>
                    <p>Integration of AI-powered content generation via OpenAI API.</p>
                    <p>Real-time database management and leaderboard functionality using DynamoDB.</p>
                    <p>Secure user authentication via Cognito.</p>
                </div>
            </section>

            <section className="cloud-links">
                <h2>Conclusion</h2>
                <p>
                    This project highlights my ability to design, implement, and deploy cloud-native applications using AWS services.
                    It showcases my skills in building serverless solutions, integrating third-party APIs, and delivering dynamic,
                    real-time functionality in a seamless React application.
                </p>
                <p>
                    <a href="#" target="_blank" rel="noreferrer">GitHub Repository</a> | 
                    <a href="#" target="_blank" rel="noreferrer">Deployed Application</a>
                </p>
            </section>
        </div>
    );
}

export default Trivia;
