import React from "react";

import "./ProgressBar.css";

function ProgressBar(props) {
    return (
        <div className="progress-bar-container">
                <div className="progress-labels">
                    {props.labels.map((item, index)=> {
                        return (<div className="progress-label" key={index}>{item}</div>);
                    })}
                </div>
                <div className="progress-bar">
                    <div className="progress" style={{width: props.percentage + "%"}}></div>
                </div>
            </div>
    );
}

export default ProgressBar;