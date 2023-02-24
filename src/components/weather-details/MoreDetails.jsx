import React from "react";
import Humidity from "./Humidity";
import Wind from "./Wind";
import Precipitation from "./Precipitation";
import UVIndex from "./UVIndex";
import FeelsLike from "./FeelsLike";
import ChanceOfRain from "./ChanceOfRain";

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