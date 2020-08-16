// Dependencies
import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { connect } from "react-redux";
// Components
import WeatherCard from "../../../src/utils/weatherCard/components/WeatherCard";
// DATA
import API_DATA from "../../../src/utils/api/data.json";
//CSS
import '../css/weatherList.css'
// Actions
import { selectCity } from "../../../src/actions/index";

const WeatherList = ({selectWeatherAction}) => {
  const [weatherDataList, loadWeatherDataList] = useState([]);
  
  const handleSelectWeather = (weather) => {
    // Accedo a selectWeatherAction mediante las props.
    selectWeatherAction(weather);
  };


  useEffect(() => {
    loadWeatherDataList(API_DATA);
  }, []);

  return (
    <div className="containerList">
      <h3 className="header">Cities</h3>
      <div className="containerElements">
        {(
          weatherDataList.map((weather, index) => {
            // console.log(weather);
            const weatherObject = {
              icon: weather.weather[0].main,
              temperature: ((weather.main.temp)/10).toFixed(1),
              humidity: weather.main.humidity,
              wind: weather.wind.speed,
              city: weather.city.name,
              nextWeatherDays: [...weather.nextDays]
            }

            // console.log(iconTransformed)
            return (
              <WeatherCard
                key={index}
                withShadow
                weatherExpandedForData={weatherObject}
                onClickFunction={() => handleSelectWeather(weatherObject)}
                humidity={weatherObject.humidity}
                wind={weatherObject.wind}
                temperature={weatherObject.temperature}
                city={weatherObject.city}
                icon={weatherObject.icon}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

WeatherList.propTypes = {
  selectWeatherAction: PropTypes.func.isRequired,
};


const mapDispatch = (dispatch) => ({
  // Éste es un objeto de las acciones que puede usar éste componente
  selectWeatherAction: (city) => dispatch(selectCity(city)),
});

export default connect(null, mapDispatch)(WeatherList);
