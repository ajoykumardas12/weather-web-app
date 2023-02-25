import React from "react";

import "./MoreDetailsItem.css";
import UVSunIcon from "../../../icons/sunny-outline.svg";

function UVIndex() {
    const uvIndexPercentage = (4 / 12.6) * 100;
    return (
        <div className="more-details-item grid-item uv-index">
            <div className="more-details-item-top">
                <div className="more-details-item-title">UV index</div>
                <div className="more-details-icon">
                    <img src={UVSunIcon} alt="UV icon" className="uv-sun-icon"/>
                </div>
            </div>
            <div className="more-details-item-text">
                <span className="more-details-item-text-value">4 </span>
                <span>medium</span>
            </div>
            <div className="more-details-item-animation">
                <div className="progress-bar-container">
                    <div className="progress-labels">
                        <div className="progress-label">0</div>
                        <div className="progress-label">2</div>
                        <div className="progress-label">4</div>
                        <div className="progress-label">6</div>
                        <div className="progress-label">8</div>
                        <div className="progress-label">10</div>
                        <div className="progress-label">11+</div>
                    </div>
                    <div className="progress-bar">
                        <div className="progress" style={{width: uvIndexPercentage + "%"}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UVIndex;