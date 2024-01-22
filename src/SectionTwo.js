import {React} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './SectionTwo.scss';
import './Tooltips.scss';
import {HalfTag, SkillPill, ScrollToIcon} from './Elements';

function Card(props) {
    const skills = props.skills.split(", ");
    const skillClasses = props.skillClasses.split(", ");
    return (
        <div className="section-two-card h-100 ps-4 pe-4 pt-4 pb-4 d-flex flex-column justify-content-between">
            <div>
                <div className="d-flex justify-content-end pb-3">
                    <div className={"accomplishment-company-image " + props.company}>
                        &nbsp;
                    </div>
                </div>
                <div className="accomplishment-point w-100">
                    <div className="d-flex justify-content-center pb-2">
                        <HalfTag tag={props.keyword} tagClass="tag-accomplishment" />
                    </div>
                    <div className="d-flex justify-content-center pt-1 pb-1">
                        <div className="col-10">{props.accomplishment}</div>
                    </div>
                </div>
            </div>
            <div className="pt-5">
                <div className="d-flex flex-wrap pt-1 pb-2">
                    { skills.map(skill => <SkillPill skill={skill} key={skill} 
                            skillClass={skillClasses[skills.indexOf(skill)]} />) }
                </div>
            </div>
        </div>
    );
}

function SectionTwo() {

    return  (
        <section id="section-two" className="w-100 h-100 p-5 position-relative d-flex flex-column">
            <header className="w-100 display-6 pb-4 ps-5 pe-5">
                <HalfTag tag="ProfessionalAccomplishments" tagClass="tag-professional-accomplishments" />
            </header>
            <main id="section-two-body" className="w-100 h-100 d-flex justify-content-between pt-3 ps-5 pe-5 pb-5">
                <Card company="company-kaseya"
                        keyword="ProductImporter"
                        skills="Azure Functions, Spark, Python"
                        skillClasses="skill-azure-functions, skill-spark, skill-python"
                        accomplishment="I have worked on re-developing the Product Importer tool by incorporating Azure Functions and introducing Spark SQL, thereby improving the runtime by 20%. I've not only optimized the performance but also streamlined the import process." />
                <Card company="company-kaseya"
                        keyword="SupportPortal"
                        skills="Go, Azure SQL"
                        skillClasses="skill-go, skill-azure-sql"
                        accomplishment="I developed multiple Golang utilities for the Support Engineers to interact with Azure SQL databases, greatly aiding our Support Portal's functionality." />
                <Card company="company-pega"
                        keyword="ServiceHealthCheckDashboard"
                        skills="AWS Elastic Beanstalk, Python, Flask, React.js, Bootstrap"
                        skillClasses="skill-aws-elastic-beanstalk, skill-python, skill-flask, skill-react, skill-bootstrap"
                        accomplishment="I presented an innovative idea and developed the Service Health Check Dashboard for monitoring health checks in a single view. This innovation helped the on-call engineers to save time while trying to find the root cause of issues." />
            </main>
            <div className="w-100" style={{height: "10%"}}></div>

            <ScrollToIcon tooltip="Scroll Down to See My Skills and Certifications" />
        </section>
    );
}

export default SectionTwo;