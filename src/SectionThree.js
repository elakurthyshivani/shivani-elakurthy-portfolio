import {React} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './SectionThree.scss';
import './Tooltips.scss';
import {HalfTag, ScrollToIcon, SkillPill} from './Elements';

function SkillCategory(props)   {
    const skills = props.skills.split(", ");
    const skillClasses = props.skillClasses.split(", ");
    return (
        <>
            <div className="skill-category-heading position-relative">
                <hr />
                <div className="position-absolute w-100 d-flex justify-content-center">
                    <span>
                        <HalfTag tag={props.categoryName} tagClass="tag-skill-category" />
                    </span>
                </div>
                
            </div>
            <div className="skill-category-body d-flex flex-wrap justify-content-center pb-2">
                { skills.map(skill => <SkillPill skill={skill} key={skill} 
                        skillClass={skillClasses[skills.indexOf(skill)]} />) }
            </div>
        </>
    );
}

function CardSkills(props) {
    return (
        <div className="card-skills w-100 h-100 pt-4 pb-4 ps-5 pe-5 d-flex flex-column">
            <SkillCategory categoryName="Languages"
                    skills="Python, Java, Go" skillClasses="skill-python, skill-java, skill-go" />
            <SkillCategory categoryName="Frameworks"
                    skills="Flask, Spring, Gin" skillClasses="skill-flask, skill-spring, skill-gin" />
            <SkillCategory categoryName="Web"
                    skills="JavaScript, React.js, jQuery, Bootstrap" 
                    skillClasses="skill-javascript, skill-react, skill-jquery, skill-bootstrap" />
            <SkillCategory categoryName="Databases"
                    skills="MySQL, Azure SQL, Azure Cosmos DB, Amazon DynamoDB" 
                    skillClasses="skill-mysql, skill-azure-sql, skill-azure-cosmos-db, skill-amazon-dynamodb" />
            <SkillCategory categoryName="Cloud"
                    skills="Amazon Web Services, Azure" 
                    skillClasses="skill-aws, skill-azure" />
            <SkillCategory categoryName="Tools"
                    skills="Git, Jira, JUnit, Selenium" 
                    skillClasses="skill-git, skill-jira, skill-junit, skill-selenium" />
            <SkillCategory categoryName="CI/CD"
                    skills="Docker, Kubernetes, Jenkins" 
                    skillClasses="skill-docker, skill-kubernetes, skill-jenkins" />
        </div>
    );
}

function CardCertification(props)   {
    return (
        <div className="card-certification pt-3 pb-4 ps-4 pe-4 d-flex flex-column justify-content-between position-relative">
            <div className="pb-3 h-100 ps-5 pe-5">
                <div className={"certification-image w-100 h-100 d-flex flex-wrap " + props.certClass}>
                    &nbsp;
                </div>
            </div>                
            <div className="d-flex flex-wrap justify-content-between align-items-center ">
                <div>
                    <HalfTag tag={props.certName.split(" ").join("")} tagClass="certification-text" />
                </div>
                { Object.keys(props).includes("credential") ? 
                    <div className="round-icon-container d-flex justify-content-end">
                        <a className="round-icon d-flex justify-content-center align-items-center"
                                data-bs-toggle="tooltip" title={props.tooltip}
                                href={props.url} target="_blank">
                            {/* <FontAwesomeIcon icon={faGithub} className="open-credly-link" /> */}
                            <span className="credly-image">&nbsp;</span>
                        </a>
                    </div> :
                    <></> }
            </div>
            { Object.keys(props).includes("credential") == false ? 
                    <div className="in-progress d-flex justify-content-center">
                        In progress
                    </div> : 
                    <></> }
            {/* <div className="pt-3 pb-3 ps-5 pe-5">
                <div className="round-icon-container d-flex justify-content-end">
                    <a className="round-icon d-flex justify-content-center align-items-center"
                            data-bs-toggle="tooltip" title={props.tooltip}
                            href={props.url} target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="open-credly-link" />
                    </a>
                </div>
            </div> */}
        </div>
    );
}

function SectionThree() {

    return  (
        <section id="section-three" className="w-100 h-100 p-5 position-relative d-flex">
            <div className="col-6 h-100 pb-5 ps-5 pe-4">
                <header className="w-100 display-6">
                    <HalfTag tag="Skills" tagClass="tag-skills" />
                </header>
                <main id="section-skills" className="w-100 h-100 pt-5 pb-5">
                    <CardSkills />
                </main>
            </div>
            <div className="col-6 h-100 pb-5 ps-4 pe-5">
                <header className="w-100 display-6">
                    <HalfTag tag="Certifications" tagClass="tag-certifications" />
                </header>
                <main id="section-certifications" className="w-100 h-100 pt-5 pb-5">
                    <div className="d-flex flex-wrap h-100 justify-content-between align-content-between">
                        <CardCertification certClass="certification_aws"
                                tooltip="Verify credentials" 
                                credential="D4MPKN5BGM1111K5"
                                certName="Cloud Practitioner"
                                url="https://www.credly.com/badges/76c3b09b-5096-427d-b2fe-99827002e8e0/public_url" />
                        <CardCertification certClass="certification_java"
                                tooltip="Verify credentials"
                                credential="267086561OCAJSE8"
                                certName="Java SE 8 Programmer"
                                url="https://www.credly.com/badges/20076204-1d92-44fd-a2b2-601d78e6a2f8/public_url" />
                        <CardCertification certClass="certification_azure"
                                certName="Azure Developer Associate"
                                tooltip="" />
                    </div>
                </main>
            </div>

            <ScrollToIcon tooltip="Scroll Down to See My Personal Projects" />
        </section>
    );
}

export default SectionThree;