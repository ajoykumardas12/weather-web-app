import React, { useState } from "react";

import "./WeatherChart.css";

import weatherData from "../../WeatherData";
import SunnyIcon from "../../icons/sunny-outline-black.svg";
import CloudyIcon from "../../icons/cloudy-outline.svg";

import WeatherDataChart from "../WeatherDataChart";

function WeatherChart() {
    const [weatherChartData, setWeatherChartData] = useState({
        labels: weatherData.map((item) => item.chanceOfPrecipitation + "%"),
        datasets: [{
            label: "",
            data: weatherData?.map((item) => item.chanceOfPrecipitation)
        }]
    })
    return (
        <div className="weather-chart-container">
            <div className="title-container">
                <div className="title">Upcoming hours</div>
                <div className="title-options">
                    Rain precipitation
                    <span className="material-icons-outlined expand-more-icon">expand_more</span>
                </div>
                <div className="title-next">
                    Next days
                    <span className="material-icons-outlined navigate-next-icon">navigate_next</span>
                </div>
            </div>
            <div className="weather-data">
                {weatherData.map((item) => {
                    return (
                        <div key={item.id} className="weather-data-item">
                            <div className="data-time">{item.time}</div>
                            <div className="data-icon-container">
                                <img src={(item.condition) ? SunnyIcon : CloudyIcon} alt="weather condition icon" className="data-icon"/>
                            </div>
                            <div className="data-temperature">{item.temperature}&deg;</div>
                        </div>
                    )
                })}
            </div>
            <div className="chart">
                <WeatherDataChart chartData={weatherChartData}/>
            </div>
        </div>
    );
}

export default WeatherChart;