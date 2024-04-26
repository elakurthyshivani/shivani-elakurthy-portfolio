import {useEffect, useRef, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Elements.scss';
import './Tooltips.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useIntersectionObserver} from "./Hook";


export function BasicButton(props)   {
    return (
        <div className={"basic-button d-flex my-2 mx-2 justify-content-center align-items-center"}
                data-bs-toggle="tooltip" 
                title={Object.keys(props).includes("tooltip") ? props.tooltip : ""}
             onClick={ Object.keys(props).includes("mobile") ?
                        () => {
                             try {
                                 navigator.clipboard.writeText(props.mobile);
                                 window.alert("Copied!");
                             }
                             catch(err)  {
                                 window.alert("Error copying phone number");
                             }
                        } :
                        null }>

            {Object.keys(props).includes("mobile") === false ?
                <a href={props.url} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={props.icon} /></a> :
                <button>
                    <FontAwesomeIcon icon={props.icon}/>
                </button>}
        </div>
    );
}

export function SkillPill(props) {
    return (
        <span className="skill-pill mt-2 me-1 d-flex align-items-center">
            <span className={"skill-image me-2 " + props.skillClass}>&nbsp;</span>
            <span className="skill-value">{props.skill}</span>
        </span>
    );
}

export function CardTitle(props) {
    const cardTitleRef = useRef(null);
    const [currTitle, setCurrTitle] = useState('');
    const isVisible = useIntersectionObserver(cardTitleRef);

    useEffect(() => {
        let timer;
        if (isVisible && currTitle.length < props.keyword.length) {
            timer = setTimeout(() => {
                setCurrTitle(props.keyword.slice(0, currTitle.length + 1));
            }, 80);
        }

        return () => clearTimeout(timer);
    }, [isVisible, currTitle]);

    return (
        <div ref={cardTitleRef}
             className="card-title w-100 d-flex flex-row flex-nowrap pb-2 px-4 align-items-baseline text-overflow-ellipsis">
            <span className="card-title-icon px-1 d-inline-flex justify-content-center align-items-center">
                &gt;_
            </span>
            <span className="card-title-value px-2 h5 text-overflow-ellipsis">
                {
                    isVisible && currTitle.length === 0 ?
                        <>&nbsp;</> :
                        <></>
                }
                <span className="h5 fw-bolder"
                        title={Object.keys(props).includes("tooltip") ?
                            props.tooltip :
                            (Object.keys(props).includes("showTooltip") && props.showTooltip === false ? "" : props.keyword)}
                        data-bs-toggle="tooltip">
                    {currTitle/*{props.keyword}*/}
                </span>
                {
                    isVisible && currTitle.length !== props.keyword.length ?
                        <span className="blink-key">_</span> :
                        <></>
                }
            </span>
        </div>
    );
}

export function SectionHeader(props) {
    return (
        <header className="section-header w-100 display-6 pt-4 px-sm-5 pb-sm-4 pb-3">
            <div className="section-header-inner">
                <span className="first-word px-1 py-2 me-2">{props.firstWord}</span>
                <span className="next-word py-2">{props.lastWord}</span>
            </div>
        </header>
    );
}