import React, { useState, useEffect } from "react";
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
// import Loader from "react-loader-spinner";
import WeatherCard from '../../../src/utils/weatherCard/components/WeatherCard'
import NextWeather from '../components/NextWeather';
import '../css/weatherExpanded.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const WeatherExpanded = ({expandCityWeather}) => {

  const {
    humidity,
    wind,
    temperature,
    city,
    nextWeatherDays,
    icon
  } = expandCityWeather.citySelected;

  
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
        <div className="nextWeatherContainer">
          {nextWeatherDays.map((element, index) => {
            return (
              <NextWeather
                key={index}
                wind={element.wind}
                day={element.day}
                temperature={element.temperature}
                humidity={element.humidity}
                icon={element.icon}
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
