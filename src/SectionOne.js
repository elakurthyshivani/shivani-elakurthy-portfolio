import {React} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import './SectionOne.scss';
import './Tooltips.scss';
import {Tag, BasicButton, ScrollToIcon} from './Elements';

function SectionOne() {
    return  (
        <section id="section-one" className="w-100 h-100 position-relative">
            <div id="section-one-inner" className="w-100 h-100 d-block position-relative">
                <div id="photo-container" className="col-6 h-100 position-absolute">
                    <div id="photo" className="col-12 h-100">
                        &nbsp;
                    </div>
                </div>
                <div id="basic-information" className="col-7 h-100 position-absolute p-5 d-flex flex-column justify-content-center">
                    <div>
                        <div id="name" className="text-end display-6 pb-4 pe-5">
                            <Tag tag="Name" tagClass="tag-name" tagValue="Shivani Elakurthy" />
                        </div>
                        <div className="se-title text-end h6 pe-5">
                            <Tag tag="CurrentRole" tagClass="tag-current-role" tagValue="Software Development Engineer @ Kaseya" />
                        </div>
                        <div className="se-title text-end h6 pb-2 pe-5">
                            <Tag tag="HighestDegree" tagClass="tag-highest-degree" tagValue="M.S. in Computer Science @ FIU" />
                        </div>
                    </div>
                    <div className="se-title text-end h6 pt-2 pb-2 pe-5">
                        <Tag tag="AboutMe" tagClass="tag-about-me" multiLine={true}
                                tagValue="I am passionate about developing innovative algorithms and solutions to simplify and automate challenges around me. Throughout my journey as a Full-stack Software Developer, I am always in pursuit of exploring and mastering new skills and technologies. Aside from coding, I love traveling to new places, sketching portraits, and playing badminton." />
                    </div>
                    <div id="basic-links-container" className="ps-5 pe-5 pt-2 pb-5 col-12 d-flex justify-content-end flex-wrap">
                        <BasicButton icon={faUser} url="https://bit.ly/e-shiv" value="Resume"
                                tooltip="Open my Resume in new tab" />
                        <BasicButton icon={faLinkedinIn} url="https://www.linkedin.com/in/eshivani" 
                                value="eshivani" tooltip="Open my LinkedIn Profile in new tab" />
                        <BasicButton icon={faEnvelope} url="mailto:eshivani.work@gmail.com"
                                value="Email" tooltip="Email me at eshivani.work@gmail.com" />
                        <BasicButton icon={faMobileScreen} mobile="+1(717)-744-8264"
                                value="Mobile" tooltip="Copy my number to clipboard" />
                        <BasicButton icon={faGithub} url="https://www.github.com/elakurthyshivani" 
                                value="elakurthyshivani" tooltip="Open my Github in new tab" />
                    </div>
                </div>
            </div>

            <ScrollToIcon tooltip="Scroll Down to See My Professional Accomplishments" />
        </section>
    );
}

export default SectionOne;