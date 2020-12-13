import React from 'react';

const workBox = (props) => {
    return (
        <div className="work-box-container">
            <span className="work-box-title">{props.title}</span>
            <span className="work-box-subtitle">{props.subtitle}</span>
        </div>
    );
}

export default workBox;