import React from "react";

import "./MoreDetailsItem.css";
import WindIcon from "../../../icons/wind_icon.svg";

function Wind() {
    const windSpeed = 8;
    //windMeterFillRotate: 0 -> 0km/h , 0.25 -> 20km/h , 0.5 -> 40km/h
    const windMeterFillRotate = (windSpeed/40)/2;

    return (
        <div className="more-details-item grid-item">
            <div className="more-details-item-top">
                <div className="more-details-item-title">Wind</div>
                <span className="meter-label" style={{alignSelf: "flex-end"}}>20</span>
                <div className="more-details-icon">
                    <img src={WindIcon} alt="Wind icon" className="wind-icon" style={{ stroke: '#fff' }}/>
                </div>
            </div>
            <div className="meter-container">
                <span><span style={{opacity: '0'}}>0</span><span className="meter-label">0</span></span>
                <div className="meter">
                    <div className="meter-body">
                        <div className="meter-fill" style={{transform: 'rotate(' + windMeterFillRotate + 'turn)'}}></div>
                        <div className="meter-cover">{windSpeed} km/h</div>
                    </div>
                </div>
                <span className="meter-label">40</span>
            </div>
        </div>
    );
}

export default Wind;