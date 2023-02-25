import React from "react";
import Humidity from "./more-details-items/Humidity";
import Wind from "./more-details-items/Wind";
import Precipitation from "./more-details-items/Precipitation";
import UVIndex from "./more-details-items/UVIndex";
import FeelsLike from "./more-details-items/FeelsLike";
import ChanceOfRain from "./more-details-items/ChanceOfRain";

import "./MoreDetails.css";

function MoreWeatherDetails() {
    return (
        <div className="more-details">
            <div className="more-details-title">
                More details of today's weather
            </div>
            <div className="grid-container">
                <Humidity />
                <Wind />
                <Precipitation />
                <UVIndex />
                <FeelsLike />
                <ChanceOfRain />
            </div>
        </div>
    );
}

export default MoreWeatherDetails;