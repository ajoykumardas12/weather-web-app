import React from "react";

import "./MoreDetailsItem.css";
import ThermometerIcon from "../../../icons/thermometer-outline.svg"

function FeelsLike() {
    const feelsLikeTemperature = 30;
    const feelsLikePercentage = feelsLikeTemperature/60 * 100;

    return (
        <div className="more-details-item grid-item feels-like">
            <div className="more-details-item-top">
                <div className="more-details-item-title">Feels like</div>
                <div className="more-details-icon">
                    <img src={ThermometerIcon} alt="Thermometer icon" className="thermometer-icon"/>
                </div>
            </div>
            <div className="more-details-item-text">
                <span className="more-details-item-text-value">30&deg;</span>
            </div>
            <div className="more-details-item-animation">
                <div className="progress-bar-container">
                    <div className="progress-labels">
                        <div className="progress-label">0&deg;</div>
                        <div className="progress-label">30&deg;</div>
                        <div className="progress-label">60&deg;</div>
                    </div>
                    <div className="progress-bar">
                        <div className="progress" style={{width: feelsLikePercentage + "%"}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeelsLike;