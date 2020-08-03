import React from 'react'
import WeatherData from './components/WeatherData'
import Location from './components/Location'
import {
  SUN
} from '../../../constants/icons';
import './css/index.css';

const WeatherLocation = props => {

  const extraInfoData = {
    humidity: '23',
    wind: '819 m/s'
  }
  return (
    <div className="containerWeatherItem">
      <Location location="Buenos Aires" />
      <WeatherData icon={SUN} temperature={12} extraInfo={extraInfoData} />
    </div>
  );
}

export default WeatherLocation;
