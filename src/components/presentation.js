import React from 'react';
import matrix from "../images/fusion.gif";

const presentation = (props) => {
    return (
        <div className="presentation-container">
             <img className="presentation-image" src={matrix} alt="matrix" />
                <p>
                Coder by day, artist by night <br></br>
                  Chocolate lover always.
                </p>
        </div>
    );
}

export default presentation;