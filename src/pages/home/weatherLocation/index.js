import React, {useState, useEffect} from 'react'
import WeatherCard from "./components/WeatherCard";
import {
  SUN, WINDY
} from '../../../constants/icons';
//Methods
import { getWeatherData } from '../../../utils/api/api'

const WeatherLocation = props => {

  const [weatherData, loadWeatherData] = useState({});

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
      icon: list[0].weather.main == 'Clear' ? SUN : WINDY,
    };
    // Set data
    loadWeatherData(data);
  }

  return (
    <WeatherCard 
      humidity={weatherData.humidity}
      wind={weatherData.wind}
      temperature={weatherData.temperature}
      city={weatherData.city}
      icon={weatherData.icon}
    />
  )
}

export default WeatherLocation;
