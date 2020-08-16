import React from "react";
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
// import Loader from "react-loader-spinner";
import WeatherCard from '../../../src/utils/weatherCard/components/WeatherCard'
import NextWeather from '../components/NextWeather';
import '../css/weatherExpanded.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { _getCitySelected } from '../../reducers/expandCityWeather';

const WeatherExpanded = ({ citySelected }) => {
  const {
    humidity,
    wind,
    temperature,
    city,
    nextWeatherDays,
    icon,
  } = citySelected;

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
            onClickFunction={null}
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

const mapState = (state) => ({
  /*
  _getCitySelected es un selector, que lo que me permite es abstraer mucho mas
  la lógica sobre como obtengo la ciudad seleccionada proveniente del state
  en caso de un refactor en el futuro, solo debo hacerlo en el selector y no tengo
  que modificar todos los containers en donde necesite esa data.
  */
  citySelected: _getCitySelected(state),
});


export default connect(mapState,null)(WeatherExpanded);
