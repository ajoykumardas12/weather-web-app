import React from "react";

import "./MoreDetailsItem.css";
import UmbrellaIcon from "../../../icons/umbrella-outline.svg";

function ChanceOfRain() {
    const chanceOfRainPercentage = 23;

    return (
        <div className="more-details-item grid-item">
            <div className="more-details-item-top">
                <div className="more-details-item-title">Chance of rain</div>
                <div className="more-details-icon">
                    <img src={UmbrellaIcon} alt="Umbrella icon" className="umbrella-icon"/>
                </div>
            </div>
            <div className="more-details-item-text">
                <span className="more-details-item-text-value">{chanceOfRainPercentage + "%"}</span>
            </div>
            <div className="more-details-item-animation">
                <div className="progress-bar-container">
                    <div className="progress-labels">
                        <div className="progress-label">0%</div>
                        <div className="progress-label">25%</div>
                        <div className="progress-label">50%</div>
                        <div className="progress-label">75%</div>
                        <div className="progress-label">100%</div>
                    </div>
                    <div className="progress-bar">
                        <div className="progress" style={{width: chanceOfRainPercentage + "%"}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChanceOfRain;