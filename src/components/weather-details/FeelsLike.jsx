import React from "react";

import "./MoreDetailsItem.css";
import ThermometerIcon from "../../icons/thermometer-outline.svg"

function FeelsLike() {
    return (
        <div className="more-details-item grid-item">
            <div className="more-details-item-top">
                <div className="more-details-title">Feels like</div>
                <div className="more-details-icon">
                    <img src={ThermometerIcon} alt="Thermometer icon" className="thermometer-icon"/>
                </div>
            </div>
            <div className="more-details-item-text">
                <span>30&deg;</span>
            </div>
            <div className="more-details-item-animation">

            </div>
        </div>
    );
}

export default FeelsLike;