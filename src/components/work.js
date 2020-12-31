import React, { useState } from "react";
import WorkBox from "../components/workBox.js";
import WorkDialog from "../components/workDialog.js";
import oracle from "../images/oracle.png";

const work = (props) => {
  return (
    <div className="work-set-container">
      <img className="oracle-logo" src={oracle} alt="matrix" />
      <div className="work-container">
        <WorkBox
          title="FE"
          subtitle="Front End"
          onClick={props.handleFEDialog}
          workButtonClass={props.feWorkButtonClass}
          handleWorkButtonClass={props.handleFEWorkButtonClass}
          handleWorkButtonLeave={props.handleWorkButtonLeave}
        ></WorkBox>

        <WorkBox
          title="BE"
          subtitle="Back End"
          onClick={props.handleBEDialog}
          workButtonClass={props.beWorkButtonClass}
          handleWorkButtonClass={props.handleBEWorkButtonClass}
          handleWorkButtonLeave={props.handleWorkButtonLeave}
        ></WorkBox>

        <WorkBox
          title="SM"
          subtitle="Scrum Master"
          onClick={props.handleSMDialog}
          workButtonClass={props.smWorkButtonClass}
          handleWorkButtonClass={props.handleSMWorkButtonClass}
          handleWorkButtonLeave={props.handleWorkButtonLeave}
        ></WorkBox>

        <WorkBox
          title="AT"
          subtitle="Automated Testing"
          onClick={props.handleATDialog}
          workButtonClass={props.atWorkButtonClass}
          handleWorkButtonClass={props.handleATWorkButtonClass}
          handleWorkButtonLeave={props.handleWorkButtonLeave}
        ></WorkBox>
      </div>
      {/* <div className="work-container">
        <WorkBox
          title="SM"
          subtitle="Scrum Master"
          onClick={props.handleSMDialog}
          workButtonClass={props.smWorkButtonClass}
          handleWorkButtonClass={props.handleSMWorkButtonClass}
          handleWorkButtonLeave={props.handleWorkButtonLeave}
        ></WorkBox>

        <WorkBox
          title="AT"
          subtitle="Automated Testing"
          onClick={props.handleATDialog}
          workButtonClass={props.atWorkButtonClass}
          handleWorkButtonClass={props.handleATWorkButtonClass}
          handleWorkButtonLeave={props.handleWorkButtonLeave}
        ></WorkBox>
      </div> */}
    </div>
  );
};

export default work;
