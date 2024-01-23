import {React} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './SectionFour.scss';
import './Tooltips.scss';
import {HalfTag, ScrollToIcon, SkillPill} from './Elements';

function Card(props) {
    const skills = props.skills.split(", ");
    const skillClasses = props.skillClasses.split(", ");
    const points = props.projectPoints.split("|");
    return (
        <div className="section-four-card h-100 pt-4 pb-4 d-flex flex-column justify-content-between">
            <div>
                <div className="project-name d-flex justify-content-center ps-4 pe-4">
                    <HalfTag tag={props.projectName} tagClass="tag-project-name" />
                </div>
                {props.inProgress ? 
                    <div className="in-progress d-flex justify-content-center ps-4 pe-4">
                        In progress
                    </div> : <></>}
                <div className="project-points w-100 pt-3 ps-5 pe-5">
                    <ul>
                        { points.map(point => <li key={point}>{point}</li>) }
                    </ul>
                    
                </div>
                <div className="d-flex flex-wrap pb-2 ps-5 pe-5">
                    { skills.map(skill => <SkillPill skill={skill} key={skill} 
                            skillClass={skillClasses[skills.indexOf(skill)]} />) }
                </div>
            </div>
            { Object.keys(props).includes("projectURL") ? 
                    <div className="pt-3 pb-3 ps-5 pe-5">
                        <div className="round-icon-container d-flex justify-content-end">
                            <a className="round-icon d-flex justify-content-center align-items-center"
                                    data-bs-toggle="tooltip" title="Open Project"
                                    href={props.projectURL} target="_blank">
                                <FontAwesomeIcon icon={faGithub} className="open-project-icon" />
                            </a>
                        </div>
                    </div> :
                    <></> }
            
        </div>
    );
}

function SectionFour() {

    return  (
        <section id="section-four" className="w-100 h-100 p-5 position-relative d-flex flex-column">
            <header className="w-100 display-6 pb-4 ps-sm-5 pe-sm-5">
                <HalfTag tag="PersonalProjects" tagClass="tag-personal-projects" />
            </header>
            <main id="section-four-body" className="w-100 h-100 d-xl-flex flex-xl-row justify-content-between pt-sm-3 ps-sm-5 pe-sm-5 pb-sm-5">
                <Card projectName="JobListingsDashboard" inProgress={true}
                        projectPoints="I am developing the Job Listings Dashboard to efficiently extract and monitor new job postings from various company career sites.|This script is automated to run every 24 hours, filtering and storing pertinent job listings in the database." 
                        projectURL="https://github.com/elakurthyshivani/job-listings-dashboard"
                        skills="Python, Flask, Azure Cosmos DB, Selenium, React.js, Bootstrap"
                        skillClasses="skill-python, skill-flask, skill-azure-cosmos-db, skill-selenium, skill-react, skill-bootstrap" />
                <Card projectName="CrossPlatformRecommendationSystem" inProgress={false}
                        projectPoints="I developed a collaborative filtering recommendation system that provides personalized recommendations to users after they finish watching a show on any OTT platform, allowing them to discover relevant content across multiple OTT platforms." 
                        projectURL="https://github.com/elakurthyshivani/Cross-Platform-Recommendation-System"
                        skills="Python, PHP, JavaScript, MySQL"
                        skillClasses="skill-python, skill-php, skill-javascript, skill-mysql" />
                <Card projectName="NewsClassificationAPI" inProgress={false}
                        projectPoints="I enjoy mastering new technologies through the hands-on development of starter projects.|While learning Golang, I developed a RESTful API to search and filter news articles in Kaggle’s HuffPost News Dataset.|This API enhanced the data readability while working on my subsequent project to construct NLP models for the HuffPost News Classification project." 
                        skills="Go, Gin, JavaScript, Bootstrap"
                        skillClasses="skill-go, skill-gin, skill-javascript, skill-bootstrap" />
            </main>
            <div className="w-100" style={{height: "10%"}}></div>
            <div className="bg-white-div position-absolute w-100"></div>

            {/* <ScrollToIcon tooltip="Scroll Down for FAQs" /> */}
        </section>
    );
}

export default SectionFour;