import React from "react";
import ProgressBar from "./ProgressBar";

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
            <ProgressBar labels={['0\u00B0','30\u00B0','60\u00B0']} percentage={feelsLikePercentage} />
        </div>
    );
}

export default FeelsLike;