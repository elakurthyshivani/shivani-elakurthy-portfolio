import 'bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import './SectionFive.scss';
import './Tooltips.scss';


import {CardTitle, SkillPill} from "./Elements";

function Row(props)  {
    const skills = props.skills.split(", ");
    const skillClasses = props.skillClasses.split(", ");
    return (
        <div className="col-sm-6 col-12">
            <div
                className="section-five-row w-100 d-flex flex-row flex-wrap justify-content-start align-items-baseline">
                <span className="row-title col-md-6 col-12"><CardTitle keyword={props.title} showTooltip={false} /></span>
                <span className="row-value d-flex flex-wrap col-md col-12 px-md-0 px-4 align-items-md-baseline align-items-center">
                    {skills[0] !== "" ?
                            skills.map(skill => <SkillPill skill={skill} key={skill}
                                                    skillClass={skillClasses[skills.indexOf(skill)]}/>) :
                            <span className="pt-2 pb-md-2 mt-md-1 mb-md-2 fw-bolder">{props.value}</span> }

                    { Object.keys(props).includes("link") ?
                        <a href={props.link} className="ms-2 px-2 py-1" title="Open project code in new tab"
                                data-bs-toggle="tooltip" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a> :
                        <></>}
                </span>
            </div>
            <hr className={"mx-4 " + (Object.keys(props).includes("last") ? "d-none" :
                                        Object.keys(props).includes("lastBefore") ? "d-md-none" : "")} />
        </div>
    );
}

function SectionFive() {

    return (
        <section id="section-five" className="w-100 px-3 py-5 d-flex flex-column">
            <div className="section-five-inner w-100 d-flex flex-wrap">
                <Row title="version" value="v2"
                     skills="" skillClasses="" />
                <Row title="developed-using"
                     skills="React.js, Bootstrap, SASS"
                     skillClasses="skill-react, skill-bootstrap, skill-sass" />
                <Row title="hosted-on"
                     skills="Azure"
                     skillClasses="skill-azure" />
                <Row title="deployed-via"
                     skills="Github Actions" skillClasses="skill-github-actions" lastBefore={true} />
                <Row title="source-code"
                     skills="Github" skillClasses="skill-github" last={true}
                     link="https://www.github.com/elakurthyshivani/shivani-elakurthy-portfolio" /> {/*Add link*/}
            </div>
        </section>
    );
}

export default SectionFive;