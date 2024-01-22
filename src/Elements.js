import {React} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Elements.scss';
import './Tooltips.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

export function OpenTag(props)  {
    return (
        <>
            <span className="html-tag">&lt;</span>
            <span className={"html-tag-name " + props.tagClass}>{props.tag}</span>
            <span className="html-tag">&gt;</span>
        </>
    );
}

export function CloseTag(props)  {
    return (
        <>
            <span className="html-tag">&lt;/</span>
            <span className={"html-tag-name " + props.tagClass}>{props.tag}</span>
            <span className="html-tag">&gt;</span>
        </>
    );
}

export function HalfTag(props) {
    return (
        <>
            <span className="html-tag">&lt;</span>
            <span className={"html-tag-name " + props.tagClass}>{props.tag}&nbsp;</span>
            {Object.keys(props).includes("attribute") ?
                <>
                    <span className="html-attribute">{props.attribute} =&nbsp;</span>
                    <span className="html-attribute-value">{props.attributeValue}</span>
                &nbsp;</> : 
                <></>}
            <span className="html-tag">/&gt;</span>
        </>
    );
}

export function Tag(props) {
    return (
        <>
            <span className="html-tag">&lt;</span>
            <span className={"html-tag-name " + props.tagClass}>{props.tag}</span>
            <span className="html-tag">&gt;</span>
            { Object.keys(props).includes("multiLine") && props.multiLine == true ?
                    <><div className="para-value col-11 pt-1 pb-1 d-flex justify-content-end">{props.tagValue}</div></> :
                    <>&nbsp;{props.tagValue}&nbsp;</>
            }
            <span className="html-tag">&lt;/</span>
            <span className={"html-tag-name " + props.tagClass}>{props.tag}</span>
            <span className="html-tag">&gt;</span>
        </>
    );
}

export function BasicButton(props)   {
    return (
        <div className={"basic-button d-flex mt-3 ms-4 "}
                data-bs-toggle="tooltip" 
                title={Object.keys(props).includes("tooltip") ? props.tooltip : ""}>
            <FontAwesomeIcon icon={props.icon} />
            {props.value != "Mobile" ? 
                <a href={props.url} target="_blank" className="ms-3">&lt;{props.value} /&gt;</a> :
                <button onClick={() => { navigator.clipboard.writeText(props.mobile); }}>
                    &nbsp;&nbsp;&lt;{props.value} /&gt;
                </button>}
            
        </div>
    );
}

export function ScrollToIcon(props) {
    const scrollToNextSection = (e) => {
        console.log(e);
        if(e != null)  {
            var current = e.target;
            console.log(e.target);
            while (current != null && current.nodeName != "SECTION")   {
                current = current.parentNode;
                console.log(current);
            }
            if(current!=null)
                current.nextSibling.scrollIntoView();
        }
    }

    return (
        <span className="round-icon-container fw-bold">
            <span className="round-icon position-absolute d-flex justify-content-center align-items-center"
                    data-bs-toggle="tooltip" title={props.tooltip} onClick={(e) => scrollToNextSection(e)}>
                <FontAwesomeIcon icon={faAnglesDown} className="scroll-to-icon" />
            </span>
        </span>
    );
}

export function SkillPill(props)   {
    return (
        <span className="skill-pill mt-2 me-1 d-flex align-items-center">
            <span className={"skill-image me-2 " + props.skillClass}>&nbsp;</span>
            <span className="skill-value">{props.skill}</span>
        </span>
    );
}