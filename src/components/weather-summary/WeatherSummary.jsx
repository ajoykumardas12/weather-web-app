import React from "react";
import WeatherSettings from "./WeatherSettings";
import CityWeatherSummary from "./CityWeatherSummary";

import "./WeatherSummary.css";

function WeatherSummary() {
    return (
        <div className="weather-summary">
            <WeatherSettings></WeatherSettings>
            <CityWeatherSummary></CityWeatherSummary>
        </div>
    );
}

export default WeatherSummary;