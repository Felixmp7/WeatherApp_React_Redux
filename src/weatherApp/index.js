import React from 'react'
import { connect } from 'react-redux';
// Components
// import Loader from "react-loader-spinner";
import WeatherExpanded from "./containers/WeatherExpanded";
import WeatherList from "./containers/WeatherList";
// CSS
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./css/index.css";
import { _getCitySelected } from '../reducers/expandCityWeather';
// Methods
// import { loadData } from './methods/_index'


const WeatherApp = ({citySelected}) => {
    return (
      <div className="containerApp">
        <WeatherList  />
        {
          citySelected && <WeatherExpanded />
        }
      </div>
    );
}

const mapState = state => ({ citySelected: _getCitySelected(state) });

export default connect(mapState,null)(WeatherApp);

