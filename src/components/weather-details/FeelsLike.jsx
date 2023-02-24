import React from "react";

import "./MoreDetailsItem.css";

function FeelsLike() {
    return (
        <div className="more-details-item grid-item">
            <div className="more-details-item-top">
                <div className="more-details-title">Feels like</div>
                <div className="more-details-icon">
                    <span className="material-icons-outlined">water_drop</span>
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