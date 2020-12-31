import React, {useState} from 'react';

const workBox = (props) => {
    return (
        <button onClick={props.onClick} className={props.workButtonClass}
        onMouseEnter={props.handleWorkButtonClass} onMouseLeave={props.handleWorkButtonLeave}
        >
            <span className="work-box-title">{props.title}</span>
            <span className="work-box-subtitle">{props.subtitle}</span>
        </button>
    );
}

export default workBox;

