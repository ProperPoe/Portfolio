import ClipFlowArch from '../../../assets/fonts/images/ClipFlowz.png';

import './cloud.scss';

function ClipFlow() {
    return (
        <div className="cloud-trivia">
            <h1 className="cloud-words">ClipFlow - Cloud-Powered Media Storage and Social Platform</h1>

            <section className="cloud-overview">
                <h2>Overview</h2>
                <p>
                    ClipFlow is a full-stack social media application designed for storing and sharing videos and images,
                    enhanced with user interactions such as comments, likes, and notifications. This project leverages a
                    scalable, highly available cloud infrastructure powered by AWS services to deliver performance and reliability.
                </p>
            </section>

            <section className="cloud-architecture">
                <h2>Architecture Overview</h2>
                <img src={ClipFlowArch} alt="ClipFlow Architecture Diagram" />
            </section>

            <section className="key-features">
                <h2>Features</h2>
                <div className="feature">
                    <h3>Secure Media Uploads</h3>
                    <p>
                        Users can upload videos and images, which are securely stored in <strong>Amazon S3</strong>.
                    </p>
                </div>

                <div className="feature">
                    <h3>Interactive Social Features</h3>
                    <p>
                        Provides commenting, liking, and notifications functionality for a dynamic user experience.
                    </p>
                </div>

                <div className="feature">
                    <h3>Cloud-Based Backend</h3>
                    <p>
                        The backend is powered by an <strong>Express.js API</strong> deployed on <strong>AWS Elastic Beanstalk</strong>.
                    </p>
                </div>

                <div className="feature">
                    <h3>Global Content Delivery</h3>
                    <p>
                        <strong>Amazon CloudFront</strong> ensures low-latency delivery of media and static resources globally.
                    </p>
                </div>

                <div className="feature">
                    <h3>Custom Domain</h3>
                    <p>
                        Application hosted on a custom domain via <strong>Amazon Route 53</strong> for DNS management.
                    </p>
                </div>
            </section>

            <section className="aws-services">
                <h2>AWS Services Used</h2>
                <p>
                    <strong>Amazon S3:</strong> Stores and serves user-uploaded images and videos.<br />
                    <strong>Amazon RDS:</strong> Relational MySQL database for user data, comments, and notifications.<br />
                    <strong>AWS Elastic Beanstalk:</strong> Hosts the backend Express.js API for managing app logic.<br />
                    <strong>Amazon CloudFront:</strong> Distributes static and media content globally with low latency.<br />
                    <strong>Amazon Route 53:</strong> Configures the custom domain and DNS.<br />
                    <strong>IAM Roles and Policies:</strong> Ensures secure access to S3 buckets and RDS instances.
                </p>
            </section>

            <section className="deployment">
                <h2>Deployment Highlights</h2>
                <p>
                    Successfully migrated from Heroku to AWS to demonstrate a production-grade cloud deployment.<br />
                    Implemented a cost-effective, scalable solution for media storage and retrieval.<br />
                    Configured IAM roles for secure backend integration with S3 and RDS.<br />
                    Leveraged Elastic Beanstalk for automated backend deployment and scaling.
                </p>
            </section>

            <section className="outcome">
                <h2>Outcome</h2>
                <p>
                    ClipFlow showcases an end-to-end cloud-powered application with seamless scalability and global availability.
                    It demonstrates expertise in leveraging AWS services to architect modern web applications.
                </p>
            </section>

            <section className="cloud-links">
                <h2>Conclusion</h2>
                <p>
                    ClipFlow highlights my ability to build scalable, secure, and high-performance applications using AWS services.
                </p>
                <p>
                    <a href="#" target="_blank" rel="noreferrer">GitHub Repository</a> | 
                    <a href="#" target="_blank" rel="noreferrer">Deployed Application</a>
                </p>
            </section>
        </div>
    );
}

export default ClipFlow;
