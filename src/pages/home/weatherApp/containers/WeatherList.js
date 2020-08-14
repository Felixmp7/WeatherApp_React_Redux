// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
// Components
import WeatherCard from '../../../../utils/weatherCard/components/WeatherCard';
// Constants
import { SUN, CLOUDY, THUNDERS, RAIN } from "../../../../constants/icons";
//CSS
import '../css/weatherList.css'
// Actions
import { actionCreator } from "../../../../actions/index";

const iconsRelation = {
  'Clear': SUN,
  'Clouds': CLOUDY,
  'Thunderstorm': THUNDERS,
  'Rain': RAIN,
};

const WeatherList = ({ weatherList, selectWeather, selectWeatherAction }) => {
  const getIcon = (icon) => {
    const iconTransformed = iconsRelation[icon];
    return iconTransformed;
  };

  const handleSelectWeather = (weather) => {
    selectWeather(weather);
    selectWeatherAction(weather);
  };

  return (
    <div className="containerList">
      <h3 className="header">Cities</h3>
      <div className="containerElements">
        {weatherList.map((weather, index) => {
          // console.log(weather.icon);
          const iconTransformed = getIcon(weather.icon);
          return (
            <WeatherCard
              key={index}
              withShadow
              weatherExpandedForData={weather}
              selectWeather={handleSelectWeather}
              humidity={weather.humidity}
              wind={weather.wind}
              temperature={weather.temperature}
              city={weather.city}
              icon={iconTransformed}
            />
          );
        })}
      </div>
    </div>
  );
};

WeatherList.propTypes = {
  weatherList: PropTypes.array,
  selectWeatherAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  // Éste es un objeto de las acciones que puede usar éste componente
  selectWeatherAction: (value) => dispatch(actionCreator(value)),
});

export default connect(null, mapDispatchToProps)(WeatherList)
