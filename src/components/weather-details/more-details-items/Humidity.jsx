import React from "react";
import ProgressBar from "./ProgressBar";

import "./MoreDetailsItem.css";
import WaterDropsIcon from "../../../icons/drops_icon.svg";

function Humidity() {
    const humidityPercentage = 82;

    return (
        <div className="more-details-item grid-item humidity">
            <div className="more-details-item-top">
                <div className="more-details-item-title">Humidity</div>
                <div className="more-details-icon humidity-icon-container">
                    <img src={WaterDropsIcon} alt="Water drops icon" className="water-drops-icon" style={{stroke: "#fff"}}/>
                </div>
            </div>
            <div className="more-details-item-text">
                <span className="more-details-item-text-value">82% </span>
                <span className="more-details-item-text-comment">bad</span>
            </div>
            <ProgressBar labels={['good','normal','bad']} percentage={humidityPercentage} />
        </div>
    );
}

export default Humidity;