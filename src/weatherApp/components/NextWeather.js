import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import '../css/nextWeather.css'
import Icon from "@mdi/react";
import {getIcon} from '../../helpers/getIcon'
import Skeleton from "@material-ui/lab/Skeleton";


const NextWeather = ({temperature, icon, humidity, wind, day}) => {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000)
  }, [])


  const renderIcon = (iconParam) => {
    // console.log(iconParam)
    const {iconPath, color} = getIcon(iconParam);
    return (
      <div className="nextContainerIcon">
        <Icon path={iconPath} title="icon" size={1} color={color} />
      </div>
    );
  };

  if (loaded) {
    return (
      <div className="containerNextWeather">
        <div className="containerRow">
          {renderIcon(icon)}
          <div className="nextTemperature">
            <span className="nextTempetureNumber">{temperature}</span>
            <span> °C</span>
          </div>
          <div className="nextContainerWindHumidity">
            <span className="nextHumidity">{`${humidity}% `}</span>
            <span className="nextWind">{wind}</span>
          </div>
        </div>
        <div className="dayContainer">
          <span className="day">{day}</span>
        </div>
      </div>
    );
    
  } 
  else {
      return (
        <div className="containerNextWeather">
          <div className="containerRow">
            <Skeleton variant="circle" width={20} height={20} />
            <div className="nextTemperature">
              <Skeleton variant="text" width={50} />
            </div>
            <div className="nextContainerWindHumidity">
              <Skeleton variant="text" width={30} />
              <Skeleton variant="text" width={30} />
            </div>
          </div>
          <Skeleton variant="text" width={50} />
        </div>
      );
    
  }
}

NextWeather.propTypes = {
  temperature: PropTypes.number,
  icon: PropTypes.string,
  humidity: PropTypes.number,
  wind: PropTypes.number,
  day: PropTypes.string
}

export default NextWeather;
