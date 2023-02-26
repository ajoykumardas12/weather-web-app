import React from "react";
import ProgressBar from "./ProgressBar";

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
            <ProgressBar labels={['0%','25%','50%','75%','100%']} percentage={chanceOfRainPercentage} />
        </div>
    );
}

export default ChanceOfRain;