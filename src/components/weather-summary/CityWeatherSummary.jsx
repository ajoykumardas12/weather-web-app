import React from "react";

import "./CityWeatherSummary.css";
import SunriseSVG from "../../icons/sunrise_icon.svg";
import SunsetSVG from "../../icons/sunset_icon.svg";


function CityWeatherSummary() {
    return (
        <div className="city-weather-summary">
            <div className="city">
                <div className="city-and-date">
                    <div className="city-name">
                    <span className="material-icons-outlined">near_me</span>
                    <p>New York, USA</p>
                    </div>
                    <div className="date">
                        <p>Today 28 Sept</p>
                    </div>
                </div>
                <div className="sunrise-and-sunset">
                    <div className="sunrise">
                        <img src={SunriseSVG} alt="sunrise" className="sunrise-icon"/>
                        <p>07:19</p>
                    </div>
                    <div className="sunset">
                        <img src={SunsetSVG} alt="sunset" className="sunset-icon"/>
                        <p>19:32</p>
                    </div>
                </div>
            </div>
            <div className="change-city">
                <span className="material-icons-outlined previous-city">navigate_before</span>
                <div className="current-city">
                    <div className="temperature">27&deg;</div>
                    <div className="weather-condition">
                        <span className="material-icons-outlined">wb_sunny</span>
                        <span className="condition">Sunny</span>
                    </div>
                </div>
                <span className="material-icons-outlined next-city">navigate_next</span>
            </div>
        </div>
    );
}

export default CityWeatherSummary;