import React from "react";
import Header from "./Header";
import WeatherChart from "./WeatherChart";
import MoreDetails from "./MoreDetails";



function WeatherDetails() {
    return (
        <div className="weather-summary">
            <Header></Header>
            <WeatherChart></WeatherChart>
            <MoreDetails></MoreDetails>
        </div>
    );
}

export default WeatherDetails;