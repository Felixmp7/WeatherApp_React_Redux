import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import { SUN, CLOUDY, THUNDERS, RAIN } from "../../../../constants/icons";
import WeatherCard from '../../../../utils/weatherCard/components/WeatherCard'
import '../css/weatherExpanded.css'

const iconsRelation = {
  Clear: SUN,
  Clouds: CLOUDY,
  Thunderstorm: THUNDERS,
  Rain: RAIN,
  Snow: ''
};

const WeatherExpanded = ({ weatherSelected }) => {
  console.log(weatherSelected);

  const [iconTransformed, transformIcon] = useState(weatherSelected.icon);

  useEffect(() => {
    const iconData = getIcon(weatherSelected.icon);
    transformIcon(iconData);
  }, [])

  const getIcon = (icon) => {
    const iconTransformed = iconsRelation[icon];
    return iconTransformed;
  };

  const {
    humidity,
    wind,
    temperature,
    city,
    icon
  } = weatherSelected;
  return (
    <div className="containerWeatherColumn">
      <h3 className="currentTitle">Current Weather</h3>
      <div className="containerWeatherExpanded">
        <div className="currentWeather">
          <WeatherCard
            humidity={humidity}
            wind={wind}
            temperature={temperature}
            city={city}
            icon={icon}
          />
        </div>
        <div className="nexWeathers"></div>
      </div>
    </div>
  );
};

WeatherExpanded.propTypes = {
  weatherSelected: PropTypes.object
}

export default WeatherExpanded
