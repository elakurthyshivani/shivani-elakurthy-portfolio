import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './SectionFour.scss';
import './Tooltips.scss';
import {CardTitle, SectionHeader, SkillPill} from './Elements';

function Card(props) {
    const skills = props.skills.split(", ");
    const skillClasses = props.skillClasses.split(", ");
    const points = props.projectPoints.split("|");
    return (
        <div className="section-four-card pt-4 pb-4 d-flex flex-column justify-content-between">
            <div>
                <div className="project-name d-flex ps-1 pe-1">
                    <CardTitle keyword={props.projectName} tooltip={props.tooltip} />
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
                    <div className="py-1 px-4">
                        <div className="round-icon-container d-flex justify-content-end">
                            <a className="round-icon d-flex justify-content-center align-items-center"
                                    data-bs-toggle="tooltip" title="Open Project"
                                    href={props.projectURL} rel="noreferrer" target="_blank">
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
        <section id="section-four" className="w-100 h-100 px-3 py-4 d-flex flex-column">
            <SectionHeader firstWord = "personal" lastWord = "projects" />
            <main id="section-four-body" className="w-100 h-100 d-xl-flex flex-xl-row justify-content-between px-sm-5 pb-sm-4 pt-md-2">
                <Card projectName="job-listings-dashboard" inProgress={true}
                        tooltip="Job Listings Dashboard"
                        projectPoints="I am developing the Job Listings Dashboard to efficiently extract and monitor new job postings from various company career sites.|This service is automated to run every 24 hours, filtering and storing pertinent job listings in the database.|I have deployed the Dashboard's backend to Azure Web App and the frontend to Azure Static Web App."
                        projectURL="https://github.com/elakurthyshivani/job-listings-dashboard"
                        skills="Python, Flask, Azure Cosmos DB, Selenium, React.js, Bootstrap, Azure"
                        skillClasses="skill-python, skill-flask, skill-azure-cosmos-db, skill-selenium, skill-react, skill-bootstrap, skill-azure" />
                <Card projectName="cross-platform-recommendation-system" inProgress={false}
                        tooltip="Cross Platform Recommendation System"
                        projectPoints="I developed a collaborative filtering recommendation system that provides personalized recommendations to users after they finish watching a show on any OTT platform, allowing them to discover relevant content across multiple OTT platforms." 
                        projectURL="https://github.com/elakurthyshivani/Cross-Platform-Recommendation-System"
                        skills="Python, PHP, JavaScript, MySQL"
                        skillClasses="skill-python, skill-php, skill-javascript, skill-mysql" />
                <Card projectName="news-classification-api" inProgress={false}
                        tooltip="News Classification API"
                        projectPoints="I enjoy mastering new technologies through the hands-on development of starter projects.|While learning Golang, I developed a RESTful API to search and filter news articles in Kaggle’s HuffPost News Dataset.|This API enhanced the data readability while working on my subsequent project to construct NLP models for the HuffPost News Classification project." 
                        skills="Go, Gin, JavaScript, Bootstrap"
                        skillClasses="skill-go, skill-gin, skill-javascript, skill-bootstrap" />
            </main>
        </section>
    );
}

export default SectionFour;