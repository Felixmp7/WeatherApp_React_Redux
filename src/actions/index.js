import { SELECT_CITY, LOAD_WEATHER_DATA } from '../constants/actionTypes';

export const selectCity = (payload) => ({
  type: SELECT_CITY,
  payload,
});

export const loadWeatherListAction = payload => ({type: LOAD_WEATHER_DATA, payload: [...payload]})

// export const loadWeatherList = (payload) => {
//     return dispatch => {
//       dispatch(loadWeatherListAction(payload));
//     }
// };


