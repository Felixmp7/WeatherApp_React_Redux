import React from "react";
import PropTypes from "prop-types";
import Icon from "@mdi/react";
import {
  mdiWhiteBalanceSunny,
  mdiWeatherCloudy,
  mdiWeatherPouring,
  mdiWeatherLightning,
} from "@mdi/js";
import { SUN, CLOUDY, THUNDERS, RAIN } from "../../../constants/icons";
import '../css/weatherData.css'

const icons = {
  [SUN]: mdiWhiteBalanceSunny,
  [CLOUDY]: mdiWeatherCloudy,
  [RAIN]: mdiWeatherPouring,
  [THUNDERS]: mdiWeatherLightning,
  'Clouds': mdiWeatherCloudy
};


const WeatherData = ({ icon, temperature, extraInfo }) => {
  // console.log(icon);

  const renderIcon = iconParam => {
    // console.log(iconParam)
    let color;
    const iconSelected = icons[iconParam];

    if (iconParam === 'SUN') color = "#f58747";
    else if (iconParam === 'CLOUDY') color = "#00d8ff";
    else if (iconParam === 'THUNDERS') color = "#999";
    else if (iconParam === 'RAIN') color = "#555";
    return (
      <div className="containerIconWeatherData">
        <Icon path={iconSelected} title="icon" size={1} color={color} />
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
    humidity: PropTypes.string,
    wind: PropTypes.string,
  }),
};

export default WeatherData;
