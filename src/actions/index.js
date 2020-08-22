import { SELECT_CITY, GET_CITY_FORECAST_DATA } from '../constants/actionTypes';
import { getWeatherData } from "../utils/api/api";

const setCity = (payload) => ({
  type: SELECT_CITY,
  payload,
});

const setForecastData = (payload) => ({
  type: GET_CITY_FORECAST_DATA,
  payload,
});

export const selectCity = (payload) => {
  return async (dispatch, getState) => {
    // getState  me sirve para obtener el estado y verificar si ya tengo una data guardada
    // evitar hacer una petición nueva de ese dato.
    
    // Disparar acción de cambio de ciudad
    dispatch(setCity(payload));

    try {
      const response = await getWeatherData();
      console.log(response);
      if(response === 'SUCCESS') {
        // Disparar acción para solicitar data
        dispatch(setForecastData({city: payload.city, status: response}))
      }
    } catch (error) {
      console.log(error)
    }
  }
  
};


