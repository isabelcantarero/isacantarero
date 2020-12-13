import React from 'react';
import matrix from "../images/matrix.jpg";

const presentation = (props) => {
    return (
        <div className="presentation-container">
             <img className="presentation-image" src={matrix} alt="matrix" />
                <p>
                  Software engineer by day... <br></br>
                  Comic developer by night.
                </p>
        </div>
    );
}

export default presentation;