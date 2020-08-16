import React from 'react'
import { connect } from 'react-redux';
// Components
// import Loader from "react-loader-spinner";
import WeatherExpanded from "./containers/WeatherExpanded";
import WeatherList from "./containers/WeatherList";
// CSS
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./css/index.css";
// Methods
// import { loadData } from './methods/_index'


const WeatherApp = ({expandCityWeather}) => {
    return (
      <div className="containerApp">
        <WeatherList  />
        {
          expandCityWeather && <WeatherExpanded />
        }
      </div>
    );
}

const mapState = ({ expandCityWeather }) => ({ expandCityWeather });

export default connect(mapState,null)(WeatherApp);

