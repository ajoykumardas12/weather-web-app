import React from "react";

import "./WeatherSettings.css";

function WeatherSettings() {
    return (
        <div className="weather-settings">
            <span className="material-icons-outlined add-icon">add</span>
            <div className="city-pagination">
                <span className="city-index city1 current-index"></span>
                <span className="city-index city1"></span>
                <span className="city-index city1"></span>
            </div>
            <div className="input-change">
                <div className="unit celcius active-unit">&deg;C</div>
                <input type="checkbox" id="unit-switch"/>
                <label htmlFor="unit-switch">switch</label>
                <div className="unit farenheit">&deg;F</div>
            </div>
        </div>
    );
}

export default WeatherSettings;