import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
// import Loader from "react-loader-spinner";
import { SUN, CLOUDY, THUNDERS, RAIN } from "../../../../constants/icons";
import WeatherCard from '../../../../utils/weatherCard/components/WeatherCard'
import NextWeather from '../components/NextWeather';
import '../css/weatherExpanded.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const iconsRelation = {
  Clear: SUN,
  Clouds: CLOUDY,
  Thunderstorm: THUNDERS,
  Rain: RAIN,
  Snow: 'SNOW'
};

const WeatherExpanded = ({ weatherSelected }) => {
  // console.log(weatherSelected);

  const [iconTransformed, transformIcon] = useState(weatherSelected.icon);
  const [nextDaysData] = useState([...weatherSelected.nextDaysData])

  useEffect(() => {
    getIcon(weatherSelected.icon);
  }, [weatherSelected.icon]);

  const getIcon = (icon) => {
    const iconTransformed = iconsRelation[icon];
    transformIcon(iconTransformed);
  };

  const {
    humidity,
    wind,
    temperature,
    city
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
              icon={iconTransformed}
            />
          </div>
          <div className="nextWeatherContainer">
            {
              nextDaysData.map((element,index) => {
                const nextIcon = iconsRelation[element.icon];
                return (
                  <NextWeather
                    key={index}
                    wind={element.wind}
                    day={element.day}
                    temperature={element.temperature}
                    humidity={element.humidity}
                    icon={nextIcon}
                  />
                );
              })
            }
          </div>
        </div>
    </div>
  );
};

WeatherExpanded.propTypes = {
  weatherSelected: PropTypes.object
}

export default WeatherExpanded
