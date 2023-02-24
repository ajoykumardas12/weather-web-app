import React from "react";

function CityWeatherSummary() {
    return (
        <div className="city-weather-summary">
            <div className="city">
                <div className="city-and-date">
                    <div className="city-name">
                    <span class="material-icons-outlined">near_me</span>
                    <p>New York, USA</p>
                    </div>
                    <div className="date">
                        <p>Today 28 Sept</p>
                    </div>
                </div>
                <div className="sunrise-and-sunset">
                    <div className="sunrise">
                        <span class="material-icons-outlined">wb_twilight</span>
                        <p>07:19</p>
                    </div>
                    <div className="sunset">
                        <span class="material-icons-outlined">wb_twilight</span>
                        <p>19:32</p>
                    </div>
                </div>
            </div>
            <div className="change-city">
                <span class="material-icons-outlined previous-city">navigate_next</span>
                <div className="current-city">
                    <div className="temperature">27&deg;</div>
                    <div className="weather-condition">
                        <span class="material-icons-outlined">wb_sunny</span>
                        <span className="condition">Sunny</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CityWeatherSummary;