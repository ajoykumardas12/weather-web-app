import React from 'react';
import WeatherSummary from './components/weather-summary/WeatherSummary';
import WeatherDetails from "./components/weather-details/WeatherDetails.jsx";

import './App.css';

function App() {
  return (
    <div className="app">
      <WeatherSummary></WeatherSummary>
      <WeatherDetails></WeatherDetails>
    </div>
  );
}

export default App;
