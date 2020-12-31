import React, {useState} from 'react';

const workDialog = (props) => {
    // if(!props.isOpen){
    //     return null;
    // } else{
        return(
            <div className={props.isOpen}>
                <h1 className="dialog-title">{props.title} </h1>
                <button className={props.crossDialogClass} onClick={props.closeDialog} onMouseEnter={props.crossButtonHanlder} onMouseLeave={props.crossButtonHanlder}>
                    <span className="fa fa-close"></span>
                </button>
                <p className="dialog-content"> {props.content} </p>
            </div>);
    //}
    
    
}

export default workDialog;




// <WorkDialog
// id="frontEndDIalog"
// title="Front End"
// className={this.isOpen}
// content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in nisl finibus, interdum turpis nec, tempor ante. Nam mattis orci et leo venenatis mollis. Suspendisse id nunc eu massa lacinia egestas. Integer et risus iaculis, luctus turpis vitae, aliquam lectus. Sed nec magna nec justo posuere ultrices euismod at enim."
// ></WorkDialog>