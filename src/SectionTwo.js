import 'bootstrap/dist/css/bootstrap.css';
import './SectionTwo.scss';
import './Tooltips.scss';
import {CardTitle, SectionHeader, SkillPill} from './Elements';

function Card(props) {
    const skills = props.skills.split(", ");
    const skillClasses = props.skillClasses.split(", ");
    const points = props.accomplishment.split("|");
    return (
        <div className="section-two-card h-100 px-2 pt-3 pb-4 d-flex flex-column justify-content-between">
            <div>
                <div className="d-flex justify-content-end pb-2 px-1">
                    <div className={"accomplishment-company-image " + props.company}>
                        &nbsp;
                    </div>
                </div>
                <div className="accomplishment-point w-100">
                    <CardTitle keyword={props.keyword} tooltip={props.tooltip}/>
                    <div className="project-points w-100 pt-3 ps-5 pe-5">
                        <ul>
                            {points.map(point => <li key={point}>{point}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="pt-1">
                <div className="d-flex flex-wrap pt-1 px-4">
                    {skills.map(skill => <SkillPill skill={skill} key={skill}
                                                    skillClass={skillClasses[skills.indexOf(skill)]} />) }
                </div>
            </div>
        </div>
    );
}

function SectionTwo() {

    return  (
        <section id="section-two" className="w-100 h-100 px-3 py-4 d-flex flex-column">
            <SectionHeader firstWord = "professional" lastWord = "achievements" />
            <main id="section-two-body" className="w-100 h-100 d-xl-flex flex-xl-row justify-content-between px-sm-5 pb-sm-4 pt-md-2">
                <Card company="company-kaseya"
                        keyword="product-importer"
                        tooltip="Product Importer"
                        skills="Azure Functions, Spark, Python, Azure SQL"
                        skillClasses="skill-azure-functions, skill-spark, skill-python, skill-azure-sql"
                        accomplishment="I have worked on re-developing and optimizing the Product Importer application by incorporating Spark SQL in Azure Functions using Python, thereby improving the efficiency of data processing of the products from the feed by 20%." />
                <Card company="company-kaseya"
                        keyword="commerce's-support-portal"
                        tooltip="Commerce's Support Portal"
                        skills="Go, Azure SQL, jQuery"
                        skillClasses="skill-go, skill-azure-sql, skill-jquery"
                        accomplishment="I have developed the Support Portal with multiple features using Go, resolving recurring support requests with a single click.|This resulted in a reduction in the sustaining time of the Support Engineers by 50%." />
                <Card company="company-pega"
                        keyword="service-health-check-dashboard"
                        tooltip="Service Health Check Dashboard"
                        skills="AWS Elastic Beanstalk, Python, Flask, React.js, Bootstrap"
                        skillClasses="skill-aws-elastic-beanstalk, skill-python, skill-flask, skill-react, skill-bootstrap"
                        accomplishment="I presented an innovative idea and developed a workflow orchestration using AWS Step Functions and Lambda Functions to consume, process, and store 10000+ health checks of multiple applications in Amazon DynamoDB.|I displayed these health checks on a dashboard, which reduced the response time of the on-call engineers by 40%." />
            </main>
        </section>
    );
}

export default SectionTwo;