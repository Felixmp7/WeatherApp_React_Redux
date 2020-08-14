import React, {useState, useEffect} from 'react'
// Components
import Loader from "react-loader-spinner";
import WeatherExpanded from "./containers/WeatherExpanded";
import WeatherList from "./containers/WeatherList";
// DATA
import APIDATA from '../../../utils/api/data.json';
// CSS
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./css/index.css";
// Methods
import { loadData } from './methods/_index'




const WeatherApp = () => {

  const [weatherData, loadWeatherData] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const [weatherSelected, selectWeather] = useState(null)

  useEffect( () => {
    const weatherDataLoaded = loadData(APIDATA);
    loadWeatherData(weatherDataLoaded);
    selectWeather(weatherDataLoaded[0]);
    setTimeout(() => {
      setDataLoaded(true)
    }, 1000);
  }, [])
  
  const changeWeather = (weather) => {
    // Accedo a selectWeatherAction mediante las props.
    selectWeather(weather);
  }

  if (dataLoaded) {
    return (
      <div className="containerApp">
        <WeatherList weatherList={weatherData} selectWeather={changeWeather} />
        <WeatherExpanded weatherSelected={weatherSelected} />
      </div>
    );
  } else {
    return (
      <div className="loaderCentered">
        <Loader
          type="Watch"
          color="#00BFFF"
          height={80}
          width={80}
          // timeout={3000} //3 secs
        />
      </div>
    );
  }

}

export default WeatherApp;

