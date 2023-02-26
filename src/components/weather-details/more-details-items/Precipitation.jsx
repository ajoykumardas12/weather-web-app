import React from "react";
import ProgressBar from "./ProgressBar";

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
            <ProgressBar labels={[0,2,4,8,10]} percentage={precipitationPercentage} />
        </div>
    );
}

export default Precipitation;