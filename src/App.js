import React from 'react';
import WeatherSummary from './components/weather-summary/WeatherSummary';
import WeatherDetails from "./components/weather-details/WeatherDetails.jsx";

import './App.css';

function App() {
  // eslint-disable-next-line no-restricted-globals
  // console.log(screen.width);

  return (
    <div className="app">
      <main>
        <WeatherSummary></WeatherSummary>
        <WeatherDetails></WeatherDetails>
      </main>
    </div>
  );
}

export default App;
