import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import Loader from "react-loader-spinner";
import { SUN, CLOUDY, THUNDERS, RAIN } from "../../../../constants/icons";
import WeatherCard from '../../../../utils/weatherCard/components/WeatherCard'
import '../css/weatherExpanded.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const iconsRelation = {
  Clear: SUN,
  Clouds: CLOUDY,
  Thunderstorm: THUNDERS,
  Rain: RAIN,
  Snow: ''
};

const WeatherExpanded = ({ weatherSelected }) => {
  console.log(weatherSelected);

  const [iconTransformed, transformIcon] = useState(weatherSelected.icon);
  const [dataLoaded, setLoaded] = useState(false);

  useEffect(() => {
    getIcon(weatherSelected.icon);
    setTimeout( () => {
      setLoaded(true);
    },5000)
    
  }, [])

  const getIcon = (icon) => {
    const iconTransformed = iconsRelation[icon];
    transformIcon(iconTransformed);
  };

  const {
    humidity,
    wind,
    temperature,
    city
  } = weatherSelected;

  return (
    <div className="containerWeatherColumn">
      <h3 className="currentTitle">Current Weather</h3>
      {dataLoaded ? (
        <div className="containerWeatherExpanded">
          <div className="currentWeather">
            <WeatherCard
              humidity={humidity}
              wind={wind}
              temperature={temperature}
              city={city}
              icon={iconTransformed}
            />
          </div>
          {/* <div className="nexWeathers"></div> */}
        </div>
      ) : (
        <div className="loaderCentered">
          <Loader
            type="TailSpin"
            color="#3a2ca5"
            height={40}
            width={40}
            // timeout={3000} //3 secs
          />
        </div>
      )}
    </div>
  );
};

WeatherExpanded.propTypes = {
  weatherSelected: PropTypes.object
}

export default WeatherExpanded
