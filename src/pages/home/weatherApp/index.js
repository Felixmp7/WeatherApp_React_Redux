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
// Store
import { createStore } from 'redux';

const store = createStore(() => {},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 

const WeatherApp = () => {

  const [weatherData, loadWeatherData] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const [weatherSelected, selectWeather] = useState(null)

  useEffect( () => {
    loadData();
  }, [])

  const loadData = () => {
    const weatherDataLoaded = APIDATA.map( item => {
      // console.log(item.weather[0].main)
      return {
        humidity: String(item.main.humidity),
        wind: String(item.wind.speed),
        temperature: (item.main.temp / 10).toFixed(2),
        city: item.city.name,
        icon: item.weather[0].main,
        nextDaysData: item.nextDays
      };
    })
    // Set data
    loadWeatherData(weatherDataLoaded);
    selectWeather(weatherDataLoaded[0]);

    const action = { type: "setCity", value: weatherDataLoaded[0] };
    store.dispatch(action);
    
    setTimeout( () => {
      setDataLoaded(true);
    },1500)
  }

  if (dataLoaded) {
    return (
      <div className="containerApp">
        <WeatherList weatherList={weatherData} selectWeather={selectWeather} />
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
