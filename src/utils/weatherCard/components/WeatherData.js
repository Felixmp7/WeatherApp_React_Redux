import React from "react";
import PropTypes from "prop-types";
import Icon from "@mdi/react";
import '../css/weatherData.css'
import { getIcon } from "../../../helpers/getIcon";


const WeatherData = ({ icon, temperature, extraInfo }) => {
  // console.log(icon);

  const renderIcon = iconParam => {
    const {iconPath, color} = getIcon(iconParam);
    return (
      <div className="containerIconWeatherData">
        <Icon path={iconPath} title="icon" size={1} color={color} />
      </div>
    );
  }

  return (
    <div className="containerWeatherData">
      {renderIcon(icon)}
      <div className="temperature">
        <span className="tempetureNumber">{temperature}</span>
        <span> °C</span>
      </div>
      <div className="containerExtraInfo">
        <span className="humidity">{`${extraInfo.humidity}% `}</span>
        <span className="wind">{extraInfo.wind}</span>
      </div>
    </div>
  );
};

WeatherData.propTypes = {
  icon: PropTypes.string,
  temperature: PropTypes.string,
  extraInfo: PropTypes.shape({
    humidity: PropTypes.number,
    wind: PropTypes.number,
  }),
};

export default WeatherData;
