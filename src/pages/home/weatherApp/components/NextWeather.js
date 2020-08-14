import React from 'react'
import PropTypes from 'prop-types'
import '../css/nextWeather.css'
import Icon from "@mdi/react";
import {
  mdiWhiteBalanceSunny,
  mdiWeatherCloudy,
  mdiWeatherPouring,
  mdiWeatherLightning,
  mdiWeatherSnowy
} from "@mdi/js";

const icons = {
  'SUN': mdiWhiteBalanceSunny,
  'CLOUDY': mdiWeatherCloudy,
  'RAIN': mdiWeatherPouring,
  'THUNDERS': mdiWeatherLightning,
  'SNOW': mdiWeatherSnowy
};


const NextWeather = ({temperature, icon, humidity, wind, day}) => {
  const renderIcon = (iconParam) => {
    // console.log(iconParam)
    let color;
    const icon = icons[iconParam];

    if (iconParam === "SUN") color = "#f58747";
    else if (iconParam === "CLOUDY") color = "#00d8ff";
    else if (iconParam === "THUNDERS") color = "#999";
    else if (iconParam === "RAIN") color = "#555";
    return (
      <div className="nextContainerIcon">
        <Icon path={icon} title="icon" size={1} color={color} />
      </div>
    );
  };
  return (
    <div className="containerNextWeather">
      <div className="containerRow">
        {renderIcon(icon)}
        <div className="nextTemperature">
          <span className="nextTempetureNumber">{temperature}</span>
          <span> °C</span>
        </div>
        <div className="nextContainerWindHumidity">
          <span className="nextHumidity">{`${humidity}% `}</span>
          <span className="nextWind">{wind}</span>
        </div>
      </div>
      <div className="dayContainer">
        <span className="day">{day}</span>
      </div>
    </div>
  );
}

// NextWeather.propTypes = {

// }

export default NextWeather;
