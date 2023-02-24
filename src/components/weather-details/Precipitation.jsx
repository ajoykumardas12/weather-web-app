import React from "react";

import "./MoreDetailsItem.css";
import RainIcon from "../../icons/rain_icon.svg";

function Precipitation() {
    return (
        <div className="more-details-item grid-item">
            <div className="more-details-item-top">
                <div className="more-details-title precipitation-icon">Precipitation</div>
                <div className="more-details-icon">
                    <img src={RainIcon} alt="" />
                </div>
            </div>
            <div className="more-details-item-text">
                <span>1.4 </span>
                <span>cm</span>
            </div>
            <div className="more-details-item-animation">

            </div>
        </div>
    );
}

export default Precipitation;