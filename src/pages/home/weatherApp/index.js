import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';
// Components
import Loader from "react-loader-spinner";
import WeatherExpanded from "./containers/WeatherExpanded";
import WeatherList from "./containers/WeatherList";
// DATA
import APIDATA from '../../../utils/api/data.json';
// CSS
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./css/index.css";
// Actions
import {actionCreator} from '../../../actions/index'



const WeatherApp = (props) => {

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

    
    setTimeout( () => {
      setDataLoaded(true);
    },1500)
  }
  
  const changeWeather = (weather) => {
    props.selectWeatherAction(weather);
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

const mapDispatchToProps = (dispatch) => ({
  selectWeatherAction: (value) => dispatch(actionCreator(value)),
});

const WeatherAppConnected = connect(null, mapDispatchToProps)(WeatherApp);

export default WeatherAppConnected;
