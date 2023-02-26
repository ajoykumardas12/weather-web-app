import React from "react";

import "./CityWeatherSummary.css";
import SunriseSVG from "../../icons/sunrise_icon.svg";
import SunsetSVG from "../../icons/sunset_icon.svg";
import NavigateIcon from "../../icons/navigate-outline.svg";
import SunnyIcon from "../../icons/sunny-outline.svg";
import AnimatedWeatherConditionIcon from "../../images/clear-day.svg";


function CityWeatherSummary() {
    return (
        <div className="city-weather-summary">
            <div className="city">
                <div className="city-and-date">
                    <div className="city-name-container">
                        <img src={NavigateIcon} alt="navigate icon" className="navigate-icon"/>
                        <p className="city-name">New York, USA</p>
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
                <span className="material-icons-outlined previous-city previous-icon">arrow_back_ios</span>
                <div className="current-city-condition">
                    <div className="temperature">27&deg;</div>
                    <div className="weather-condition">
                        <img src={SunnyIcon} alt="weather condition icon" className="weather-condition-icon"/>
                        <span className="condition">Sunny</span>
                    </div>
                </div>
                <span className="material-icons-outlined next-city next-icon">arrow_forward_ios</span>
            </div>
            <div className="animated-icon-container">
                <img src={AnimatedWeatherConditionIcon} alt="weather condition icon" className="animated-weather-condition-icon"/>
            </div>
        </div>
    );
}

export default CityWeatherSummary;