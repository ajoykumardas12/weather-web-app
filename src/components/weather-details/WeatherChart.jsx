import React from "react";

function WeatherChart() {
    return (
        <div className="weather-chart">
            <div className="title-container">
                <div className="title">Upcoming hours</div>
                <div className="chart-options">
                    Rain precipitation
                    <span class="material-icons-outlined">expand_more</span>
                </div>
                <div className="chart-next">
                    Next Days
                    <span class="material-icons-outlined">navigate_next</span>
                </div>
            </div>
            <div className="chart">
                
            </div>
        </div>
    );
}

export default WeatherChart;