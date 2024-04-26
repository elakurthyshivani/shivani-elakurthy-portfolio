import 'bootstrap/dist/css/bootstrap.css';
import { faEnvelope, faFileLines } from '@fortawesome/free-regular-svg-icons';
import { faMobileScreen, faCode } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import './SectionOne.scss';
import './Tooltips.scss';
import {BasicButton, CardTitle} from './Elements';

function SOneRow(props) {
    return (
        <div id={props.isName ? "name" : ""} className="d-flex flex-md-row flex-column align-items-baseline">
            <span className="col-md-5 col-12">
                <CardTitle keyword={props.keyword} showTooltip={false} />
            </span>
            <span className={(props.isName === false ? "se-title" : "row-value display-6") +
                                " col-md col-12 px-md-0 pb-md-0 px-4 pb-2 fw-bolder"}>
                {props.value}
            </span>
        </div>
    );
}

function SectionOne() {
    return (
        <section id="section-one" className="w-100 h-100 position-relative">
            <div id="section-one-inner" className="w-100 h-100 d-block position-relative">
                <div id="photo-container" className="col-6 h-100 position-absolute">
                    <div id="photo" className="col-12 h-100">
                        &nbsp;
                    </div>
                </div>
                <div id="basic-information" className="col-7 h-100 position-absolute pt-sm-0 pt-3 pb-sm-3 px-sm-3 d-flex row justify-content-center">
                    <div className="col-sm-10 col-12 d-flex flex-column justify-content-center">
                        <SOneRow isName={true} keyword="name" tagName="tag-name"
                                 value="Shivani Elakurthy"/>
                        <hr className="mx-4" />
                        <SOneRow isName={false} keyword="current-role" tagName="tag-current-role"
                                 value="Software Development Engineer @ Kaseya"/>
                        <hr className="mx-4" />
                        <SOneRow isName={false} keyword="highest-degree" tagName="tag-highest-degree"
                                 value="M.S. in Computer Science @ FIU"/>
                        <hr className="mx-4" />
                        <SOneRow isName={false} keyword="about-me" tagName="tag-about-me"
                                 value="I am passionate about developing innovative algorithms and solutions to simplify and automate challenges around me. Throughout my journey as a Full-stack Software Developer, I am always in pursuit of exploring and mastering new skills and technologies. Aside from coding, I love traveling to new places, sketching portraits, and playing badminton."/>
                        <hr className="mx-4 d-sm-none" />
                    </div>
                    <div id="basic-links-container"
                         className="col-sm col-12 d-flex flex-md-column flex-wrap justify-content-center align-items-end pe-md-4 pb-mb-0 pb-4">
                        <BasicButton icon={faFileLines} url="https://bit.ly/e-shiv"
                                     tooltip="Open my Resume in new tab"/>
                        <BasicButton icon={faLinkedinIn} url="https://www.linkedin.com/in/elakurthyshivani"
                                     tooltip="Open my LinkedIn Profile in a new tab"/>
                        <BasicButton icon={faEnvelope} url="mailto:elaks.edu@gmail.com"
                                     tooltip="Email me at elaks.edu@gmail.com" />
                        <BasicButton icon={faMobileScreen} mobile="+1(717)-744-8264"
                                tooltip="Copy my number to clipboard" />
                        <BasicButton icon={faGithub} url="https://www.github.com/elakurthyshivani" 
                                tooltip="Open my Github in a new tab" />
                        <BasicButton icon={faCode} url="https://www.leetcode.com/elaks"
                                tooltip="Open my Leetcode profile in a new tab" />
                    </div>
                </div>
            </div>

        </section>
    );
}

export default SectionOne;