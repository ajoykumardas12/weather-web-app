import React from "react";

import "./WeatherChart.css";

function WeatherChart() {
    return (
        <div className="weather-chart">
            <div className="title-container">
                <div className="title">Upcoming hours</div>
                <div className="chart-options">
                    Rain precipitation
                    <span className="material-icons-outlined">expand_more</span>
                </div>
                <div className="chart-next">
                    Next days
                    <span className="material-icons-outlined">navigate_next</span>
                </div>
            </div>
            <div className="chart">
                
            </div>
        </div>
    );
}

export default WeatherChart;