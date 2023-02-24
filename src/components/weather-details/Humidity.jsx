import React from "react";

import "./MoreDetailsItem.css";

function Humidity() {
    return (
        <div className="more-details-item grid-item">
            <div className="more-details-item-top">
                <div className="more-details-title">Humidity</div>
                <div className="more-details-icon">
                    <span className="material-icons-outlined water-drop-icon">water_drop</span>
                </div>
            </div>
            <div className="more-details-item-text">
                <span>82% </span>
                <span>bad</span>
            </div>
            <div className="more-details-item-animation">

            </div>
        </div>
    );
}

export default Humidity;