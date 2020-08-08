import React, {useState, useEffect} from 'react'
// Components
import Loader from "react-loader-spinner";
import WeatherCard from "./components/WeatherCard";
// Methods
import { getWeatherData } from '../../../utils/api/api'
// Constants
import {
  SUN, WINDY
} from '../../../constants/icons';
// CSS
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const WeatherLocation = props => {

  const [weatherData, loadWeatherData] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect( () => {
    loadData();
  }, [])

  const loadData = async () => {
    const response = await getWeatherData();
    // console.log(response);
    const { city, list } = response;
    const data = {
      humidity: String(list[0].main.humidity),
      wind: String(list[0].wind.speed),
      temperature: list[0].main.temp,
      city: city.name,
      icon: list[0].weather.main === 'Clear' ? SUN : WINDY,
    };
    // Set data
    loadWeatherData(data);
    setTimeout( () => {
      setDataLoaded(true);
    },3000)
  }

  if (dataLoaded) {
    return (
      <WeatherCard 
        humidity={weatherData.humidity}
        wind={weatherData.wind}
        temperature={weatherData.temperature}
        city={weatherData.city}
        icon={weatherData.icon}
      />
    )
  } else {
    return (
      <div style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
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

export default WeatherLocation;
