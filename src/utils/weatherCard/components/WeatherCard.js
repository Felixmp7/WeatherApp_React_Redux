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
  onClickFunction
}) => (
  <div 
    className="containerWeatherItem"
    onClick={onClickFunction}
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
