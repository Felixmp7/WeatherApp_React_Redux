import React, { useState, useEffect } from "react";
import {connect} from 'react-redux'
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

const WeatherExpanded = ({ weatherSelected, expandCityWeather}) => {
  const {
    humidity,
    wind,
    temperature,
    city,
    nextWeatherDays,
    icon
  } = expandCityWeather.citySelected;


  const [iconTransformed, transformIcon] = useState(icon);
  // const [nextDaysData] = useState([...weatherSelected.nextDaysData])

  useEffect(() => {
    getIcon(icon);
  }, [icon]);

  const getIcon = (icon) => {
    const iconTransformed = iconsRelation[icon];
    transformIcon(iconTransformed);
  };


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
          {nextWeatherDays.map((element, index) => {
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
          })}
        </div>
      </div>
    </div>
  );
};

WeatherExpanded.propTypes = {
  weatherSelected: PropTypes.object
}

const mapState = ({ expandCityWeather }) => ({expandCityWeather});


export default connect(mapState,null)(WeatherExpanded);
