import React from "react";
import Humidity from "./Humidity";
import Wind from "./Wind";
import Precipitation from "./Precipitation";
import UVIndex from "./UVIndex";
import FeelsLike from "./FeelsLike";
import ChanceOfRain from "./ChanceOfRain";

function MoreWeatherDetails() {
    return (
        <div className="more-weather-details">
            <div className="more-details-title">
                More details of today's weather
            </div>
            <div className="grid-container">
                <Humidity className="grid-item" />
                <Wind className="grid-item" />
                <Precipitation className="grid-item" />
                <UVIndex className="grid-item" />
                <FeelsLike className="grid-item" />
                <ChanceOfRain className="grid-item" />
            </div>
        </div>
    );
}

export default MoreWeatherDetails;