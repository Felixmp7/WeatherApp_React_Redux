import { combineReducers } from 'redux';
// import { loadFirstCitiesList } from './loadWeatherData';
import { expandCityWeather } from "./expandCityWeather";

export default combineReducers({
  citySelected: expandCityWeather,
  // citiesList: loadFirstCitiesList,
});

