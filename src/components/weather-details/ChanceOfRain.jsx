import React from "react";

import "./MoreDetailsItem.css";
import UmbrellaIcon from "../../icons/umbrella-outline.svg";

function ChanceOfRain() {
    return (
        <div className="more-details-item grid-item">
            <div className="more-details-item-top">
                <div className="more-details-title">Chance of rain</div>
                <div className="more-details-icon">
                    <img src={UmbrellaIcon} alt="Umbrella icon" className="umbrella-icon"/>
                </div>
            </div>
            <div className="more-details-item-text">
                <span>42%</span>
            </div>
            <div className="more-details-item-animation">

            </div>
        </div>
    );
}

export default ChanceOfRain;