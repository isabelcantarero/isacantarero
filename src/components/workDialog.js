import React, {useState} from 'react';

const workDialog = (props) => {
        return(
            <div className={props.isOpen}>
                <h1 className="dialog-title">{props.title} </h1>
                <button className={props.crossDialogClass} onClick={props.closeDialog} onMouseEnter={props.crossButtonHanlder} onMouseLeave={props.crossButtonHanlder}>
                    <span className="fa fa-close"></span>
                </button>
                <p className="dialog-content"> {props.content} </p>
            </div>);
}

export default workDialog;

