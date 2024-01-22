import {React, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';
import './Body.scss';
import './Tooltips.scss';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';

function Body() {
    useEffect(() => {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        const tooltipList = tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
      }, []);

    return  (
        <>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
        </>
    );
}

export default Body;