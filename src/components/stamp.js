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
      <h1>  Hey thanks for passing by!</h1>
      <p className="post-body"> I would love to colaborate with you, please contact me on isacantarero1@gmail.com </p>
    </div>
  );
};

export default stamp;
