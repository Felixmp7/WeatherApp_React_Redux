import React, {useState, useEffect} from 'react'
// Components
import Loader from "react-loader-spinner";
import WeatherCard from "./components/WeatherCard";
import WeatherExpanded from "./containers/WeatherExpanded";
import WeatherList from "./containers/WeatherList";
// DATA
import APIDATA from '../../../utils/api/data.json';
// CSS
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./css/index.css";

const WeatherApp = () => {

  const [weatherData, loadWeatherData] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect( () => {
    loadData();
  }, [])

  const loadData = async () => {
    const weatherDataLoaded = APIDATA.map( item => {
      console.log(item.weather[0].main)
      return {
        humidity: String(item.main.humidity),
        wind: String(item.wind.speed),
        temperature: (item.main.temp / 10).toFixed(2),
        city: item.city.name,
        icon: item.weather[0].main
      };
    })
    // Set data
    loadWeatherData(weatherDataLoaded);
    setTimeout( () => {
      setDataLoaded(true);
    },3000)
  }

  if (dataLoaded) {
    return (
      <div className="containerApp">
        <WeatherList weatherList={weatherData} />
        <WeatherExpanded />
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
