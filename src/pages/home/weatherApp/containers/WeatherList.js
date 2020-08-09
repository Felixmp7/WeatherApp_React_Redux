import React from 'react'
import WeatherCard from '../../../../utils/weatherCard/components/WeatherCard';
import PropTypes from 'prop-types'
// Constants
import { SUN, CLOUDY, THUNDERS, RAIN } from "../../../../constants/icons";
//CSS
import '../css/weatherList.css'

const iconsRelation = {
  'Clear': SUN,
  'Clouds': CLOUDY,
  'Thunderstorm': THUNDERS,
  'Rain': RAIN,
};

const WeatherList = ({weatherList}) => {

  const getIcon = (icon) => {
    const iconTransformed = iconsRelation[icon];
    return iconTransformed;
  }
  return (
    <div className="containerList">
      <h3 className="header">Cities</h3>
      <div className="containerElements">
        {weatherList.map((weather, index) => {
          // console.log(weather.icon);
          const iconTransformed = getIcon(weather.icon);
          return (
            <WeatherCard
              key={index}
              withShadow
              humidity={weather.humidity}
              wind={weather.wind}
              temperature={weather.temperature}
              city={weather.city}
              icon={iconTransformed}
            />
          );
        })}
      </div>
    </div>
  );
}

WeatherList.propTypes = {
  weatherList: PropTypes.array
};

export default WeatherList
