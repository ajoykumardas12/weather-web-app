import React from "react";

import "./WeatherSettings.css";

function WeatherSettings() {
    return (
        <div className="weather-settings">
            <span className="material-icons-outlined add-icon">add</span>
            <div className="city-pagination">
                <span className="city1">1</span>
                <span className="city1">2</span>
                <span className="city1">3</span>
            </div>
            <div className="input-change">
                <div className="unit">&deg;C</div>
                <input type="checkbox" />
                <div className="unit">&deg;F</div>
            </div>
        </div>
    );
}

export default WeatherSettings;