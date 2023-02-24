import React from "react";
import Header from "./Header";
import WeatherChart from "./WeatherChart";
import MoreDetails from "./MoreDetails";

import "./WeatherDetails.css";

function WeatherDetails() {
    return (
        <div className="weather-details">
            <Header></Header>
            <WeatherChart></WeatherChart>
            <MoreDetails></MoreDetails>
        </div>
    );
}

export default WeatherDetails;