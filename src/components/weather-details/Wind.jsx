import React from "react";

import "./MoreDetailsItem.css";

function Wind() {
    return (
        <div className="more-details-item grid-item">
            <div className="more-details-item-top">
                <div className="more-details-title">Wind</div>
                <div className="more-details-icon">
                    <span className="material-icons-outlined wind-icon">air</span>
                </div>
            </div>
            <div className="more-details-item-animation">

            </div>
            <div className="more-details-item-text">
                <span>8 </span>
                <span>km/h</span>
            </div>
        </div>
    );
}

export default Wind;