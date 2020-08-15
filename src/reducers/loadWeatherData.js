import { LOAD_WEATHER_DATA } from "../constants/actionTypes";


export const loadFirstCitiesList = (state = {}, action) => {
  switch (action.type) {
    case LOAD_WEATHER_DATA:
      return [...action.payload];

    default:
      return state;
  }
};