import React from "react";

function WeatherSettings() {
    return (
        <div className="weather-settings">
            <button>
                <span class="material-icons-outlined">add</span>
            </button>
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