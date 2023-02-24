import React from "react";

import "./MoreDetailsItem.css";

function ChanceOfRain() {
    return (
        <div className="more-details-item grid-item">
            <div className="more-details-item-top">
                <div className="more-details-title">Chance of rain</div>
                <div className="more-details-icon">
                    <span className="material-icons-outlined">water_drop</span>
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