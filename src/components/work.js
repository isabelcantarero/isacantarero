import React from 'react';
import WorkBox from "../components/workBox.js";
import WorkDialog from "../components/workDialog.js";
import oracle from "../images/oracle.png";

const work = (props) => {
    return (
        <div className="work-set-container">
            <img className="oracle-logo" src={oracle} alt="matrix" />
        <div className="work-container">
            <WorkBox title="FE" subtitle="Front End"></WorkBox>
            <WorkBox title="BE" subtitle="Back End"></WorkBox>
        </div>
        <div className="work-container">
            <WorkBox title="SM" subtitle="Scrum Master"></WorkBox>
            <WorkBox title="AT" subtitle="Automated Testing"></WorkBox>
        </div>
        </div>
    );
}

export default work;