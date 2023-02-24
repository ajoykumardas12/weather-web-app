import React from "react";

import "./MoreDetailsItem.css";

function UVIndex() {
    return (
        <div className="more-details-item grid-item">
            <div className="more-details-item-top">
                <div className="more-details-title">UV index</div>
                <div className="more-details-icon">
                    <span className="material-icons-outlined uv-sun-icon">wb_sunny</span>
                </div>
            </div>
            <div className="more-details-item-text">
                <span>4 </span>
                <span>medium</span>
            </div>
            <div className="more-details-item-animation">

            </div>
        </div>
    );
}

export default UVIndex;