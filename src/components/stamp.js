import React, { useState } from "react";
import queenstamp from "../images/queenstamp.png";

const stamp = (props) => {
  return (
    <div className={props.isOpen}>
      <button
        className={props.crossDialogClass}
        onClick={props.closeDialog}
        onMouseEnter={props.crossButtonHanlder}
        onMouseLeave={props.crossButtonHanlder}
      >
        <span className="fa fa-close"></span>
      </button>
      <img className={props.stampClass} src={queenstamp} alt="matrix" />
    </div>
  );
};

export default stamp;
