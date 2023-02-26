import React from "react";
import ProgressBar from "./ProgressBar";

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
            <ProgressBar labels={['0','2','4','6','8','10','11+']} percentage={uvIndexPercentage} />
        </div>
    );
}

export default UVIndex;