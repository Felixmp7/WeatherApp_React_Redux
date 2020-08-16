import { SELECT_CITY } from '../constants/actionTypes'

// Funciones Puras
/* 
  Consisten en funciones que solo trabajan y realizan operaciones con los
  parametros que le pasamos, no utiliza otras variables, ni depende
  de otros datos, sólo de los que recibe por parametros.
*/

export const expandCityWeather = (state = null, action) => {
  switch (action.type) {
    case SELECT_CITY:
      return { 
        ...state,
        citySelected: action.payload
      };

    default:
      return state;
  }
};

export const _getCitySelected = state => state.expandCityWeather.citySelected;
