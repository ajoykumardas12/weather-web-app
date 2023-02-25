import React from "react";

import "./MoreDetailsItem.css";
import RainIcon from "../../../icons/rain_icon.svg";

function Precipitation() {
    const precipitationPercentage = 1.4 * 10;

    return (
        <div className="more-details-item grid-item precipitation">
            <div className="more-details-item-top">
                <div className="more-details-item-title precipitation-icon">Precipitation</div>
                <div className="more-details-icon">
                    <img src={RainIcon} alt="" />
                </div>
            </div>
            <div className="more-details-item-text">
                <span className="more-details-item-text-value">1.4 cm</span>
            </div>
            <div className="more-details-item-animation">
                <div className="progress-bar-container">
                    <div className="progress-labels">
                        <div className="progress-label">0</div>
                        <div className="progress-label">2</div>
                        <div className="progress-label">4</div>
                        <div className="progress-label">8</div>
                        <div className="progress-label">10</div>
                    </div>
                    <div className="progress-bar">
                        <div className="progress" style={{width: precipitationPercentage + "%"}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Precipitation;