import React from 'react';

const skills = (props) => {

    return (
        <div className="skills-container">
            <div className="skills-circle">
                <span className="skills-title">{props.title}</span>
            </div>
            <div>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            </div>
        </div>
    );
}

export default skills;