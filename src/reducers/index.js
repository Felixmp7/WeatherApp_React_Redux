import { combineReducers } from 'redux';
// import { loadFirstCitiesList } from './loadWeatherData';
import { expandCityWeather } from "./expandCityWeather";

export default combineReducers({
  expandCityWeather,
  // citiesList: loadFirstCitiesList,
});

