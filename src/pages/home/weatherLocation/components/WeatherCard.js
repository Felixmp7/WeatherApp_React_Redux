import React from "react";
import WeatherData from "./WeatherData";
import Location from "./Location";
import "../css/WeatherCard.css";

const WeatherCard = ({ icon, temperature, humidity, wind, city }) => (
  <div className="containerWeatherItem">
    <Location location={city} />
    <WeatherData
      icon={icon}
      temperature={temperature}
      extraInfo={{humidity, wind}}
    />
  </div>
);

export default WeatherCard;
