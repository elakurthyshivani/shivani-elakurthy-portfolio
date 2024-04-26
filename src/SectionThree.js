import 'bootstrap/dist/css/bootstrap.css';
import './SectionThree.scss';
import './Tooltips.scss';
import {CardTitle, SectionHeader, SkillPill} from './Elements';

function SkillCategory(props)   {
    const skills = props.skills.split(", ");
    const skillClasses = props.skillClasses.split(", ");
    return (
        <>
            <div className="d-flex flex-sm-row flex-column align-items-baseline">
                <div className="skill-category-heading col-lg-5 col-sm-4 col-md-3">
                    <CardTitle keyword={props.categoryName} tooltip={props.tooltip} />
                </div>
                <div className="skill-category-body px-4 px-sm-0 col d-flex flex-wrap justify-content-lg-center justify-content-md-start justify-content-sm-center justify-content-start pb-2">
                    {skills.map(skill => <SkillPill skill={skill} key={skill}
                                                    skillClass={skillClasses[skills.indexOf(skill)]}/>)}
                </div>
            </div>
            {
                Object.keys(props).includes("last") ?
                    <></>:
                    <hr className="mx-4" />
            }
        </>
    );
}

function CardSkills() {
    return (
        <div className="card-skills w-100 h-100 pt-3 pb-3 d-flex flex-column">
            <SkillCategory categoryName="languages"
                    skills="Python, Java, Go"
                    skillClasses="skill-python, skill-java, skill-go"
                    tooltip="Languages" />
            <SkillCategory categoryName="frameworks"
                    skills="Flask, Spring, Gin, FastAPI"
                    skillClasses="skill-flask, skill-spring, skill-gin, skill-fast-api"
                    tooltip="Frameworks" />
            <SkillCategory categoryName="front-end"
                    skills="JavaScript, React.js, Angular.js, jQuery, Bootstrap"
                    skillClasses="skill-javascript, skill-react, skill-angular, skill-jquery, skill-bootstrap"
                    tooltip="Frontend" />
            <SkillCategory categoryName="databases"
                    skills="MySQL, Azure SQL, Azure Cosmos DB, Amazon DynamoDB" 
                    skillClasses="skill-mysql, skill-azure-sql, skill-azure-cosmos-db, skill-amazon-dynamodb"
                    tooltip="Databases" />
            <SkillCategory categoryName="cloud"
                    skills="Amazon Web Services, Azure" 
                    skillClasses="skill-aws, skill-azure"
                    tooltip="Cloud" />
            <SkillCategory categoryName="ci/cd"
                    skills="Docker, Kubernetes, Jenkins" 
                    skillClasses="skill-docker, skill-kubernetes, skill-jenkins"
                    tooltip="CI/CD" />
            <SkillCategory categoryName="tools"
                    skills="Git, Jira, JUnit, Selenium" 
                    skillClasses="skill-git, skill-jira, skill-junit, skill-selenium"
                    tooltip="Tools" last={true}/>
        </div>
    );
}

function CardCertification(props)   {
    return (
        <div className={(Object.keys(props).includes("className") ? props.className : "") +
                "card-certification h-50 py-3 px-1 d-flex flex-column justify-content-between position-relative"}>

            <div className="certification-name-outer">
                <CardTitle keyword={props.certName} tooltip={props.tooltip} />
            </div>
            <div className="pb-1 px-2">
                <div className={"certification-image w-100 d-flex flex-wrap " + props.certImageClass}>
                    &nbsp;
                </div>
            </div>
            <div className="d-flex justify-content-end pe-3">
                {Object.keys(props).includes("credential") ?
                    <div className="round-icon-container d-flex justify-content-end">
                        <a className="round-icon d-flex justify-content-center align-items-center"
                                data-bs-toggle="tooltip" title={props.buttonTooltip}
                                href={props.url} target="_blank" rel="noreferrer">
                            <span className="credly-image">&nbsp;</span>
                        </a>
                    </div> :
                    <></> }
            </div>
            { Object.keys(props).includes("credential") === false ?
                    <div className="in-progress d-flex justify-content-center">
                        In progress
                    </div> : 
                    <></> }
        </div>
    );
}

function SectionThree() {

    return  (
        <section id="section-three" className="w-100 h-100 px-3 py-4 d-lg-flex flex-lg-row">
            <div className="col-lg-6 h-100">
                <SectionHeader firstWord = "technical" lastWord = "skills" />
                <main id="section-skills" className="w-100 pt-3 pt-lg-2 ps-sm-5 pe-sm-5 pe-lg-4 pb-lg-4">
                    <CardSkills />
                </main>
            </div>
            <div className="col-lg-6 h-100 pt-5 pt-lg-0">
                <SectionHeader firstWord = "certifications" lastWord = "&nbsp;" />
                <main id="section-certifications" className="w-100 pt-lg-2 pb-sm-5 pe-sm-5 ps-sm-5">
                    <div className="d-md-flex flex-md-row flex-wrap justify-content-between align-content-between">
                        <CardCertification certImageClass="certification_aws"
                                buttonTooltip="Verify credentials"
                                credential="D4MPKN5BGM1111K5"
                                certName="aws-cloud-practitioner"
                                tooltip="AWS Cloud Practitioner"
                                url="https://www.credly.com/badges/76c3b09b-5096-427d-b2fe-99827002e8e0/public_url" />
                        <CardCertification certImageClass="certification_java"
                                buttonTooltip="Verify credentials"
                                credential="267086561OCAJSE8"
                                certName="java-se-8-programmer"
                                tooltip="Java SE 8 Programmer"
                                url="https://www.credly.com/badges/20076204-1d92-44fd-a2b2-601d78e6a2f8/public_url" />
                        <CardCertification certImageClass="certification_azure"
                                certName="azure-developer-associate"
                                tooltip="Azure Developer Associate"
                                className=" mt-lg-4 mt-md-5 pb-5 "
                                buttonTooltip="" />
                    </div>
                </main>
            </div>

        </section>
    );
}

export default SectionThree;