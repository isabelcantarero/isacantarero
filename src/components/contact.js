import React, { useState } from "react";

const contact = (props) => {
  return (
    <div className="profile-container">
      <div className="profile-container-upper-part">
        <div className="profile-image">
          <span className="profile-icon fas fa-user-astronaut"></span>
        </div>
        <div className="profile-name-container">
          <h2 className="profile-name">Isa Cantarero</h2>
          <button
            className={props.mailMeButtonClass}
            onMouseEnter={props.handleMailMeButtonClass}
            onMouseLeave={props.handleMailMeButtonClass}
            onClick={props.handleMailMeDialog}
          >
            mail me <i className="fa fa-envelope"></i>
          </button>
        </div>
      </div>
      <div className="profile-container-bottom-part"></div>
    </div>
  );
};

export default contact;
