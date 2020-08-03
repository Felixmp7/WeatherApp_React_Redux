import React from "react";
import PropTypes from "prop-types";
import Icon from "@mdi/react";
import {
  mdiWhiteBalanceSunny,
  mdiWeatherFog,
  mdiWeatherCloudy,
  mdiWeatherPouring,
  mdiWeatherSnowy,
  mdiWeatherWindyVariant,
} from "@mdi/js";
import { 
  SUN,
  CLOUDY,
  CLOUD,
  RAIN,
  SNOW,
  WINDY
} from '../../../../constants/icons';
import '../css/weatherData.css'

const icons = {
  [SUN]: mdiWhiteBalanceSunny,
  [CLOUDY]: mdiWeatherFog,
  [CLOUD]: mdiWeatherCloudy,
  [RAIN]: mdiWeatherPouring,
  [SNOW]: mdiWeatherSnowy,
  [WINDY]: mdiWeatherWindyVariant,
};


const WeatherData = ({ icon, temperature, extraInfo }) => {
  // Methods
  const renderIcon = iconParam => {
    const icon = icons[iconParam];
    return (
      <div className="containerIconWeatherData">
        <Icon
          path={icon}
          title="icon"
          size={1}
          color="black"
        />
      </div>
    )
  }

  return (
    <div className="containerWeatherData">
      {renderIcon(icon)}
      <div className="temperature">{`${temperature} °C`}</div>
      <div className="containerExtraInfo">
        <span className="humidity">{`${extraInfo.humidity}% `}</span>
        <span className="wind">{extraInfo.wind}</span>
      </div>
    </div>
  );
};

WeatherData.propTypes = {
  icon: PropTypes.string ,
  temperature:PropTypes.number ,
  extraInfo:PropTypes.object
};

export default WeatherData;
