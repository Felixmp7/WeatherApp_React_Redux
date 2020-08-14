import React from "react";
import WeatherData from "./WeatherData";
import Location from "./Location";
import "../css/weatherCard.css";

const WeatherCard = ({
  icon,
  temperature,
  humidity,
  wind,
  city,
  selectWeather,
  weatherExpandedForData,
}) => (
  <div 
    className="containerWeatherItem"
    onClick={() => selectWeather(weatherExpandedForData)}
  >
    <Location location={city} />
    <WeatherData
      icon={icon}
      temperature={temperature}
      extraInfo={{ humidity, wind }}
    />
  </div>
);

export default WeatherCard;
