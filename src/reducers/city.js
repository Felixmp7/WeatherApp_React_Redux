import { SELECT_CITY } from '../actions/index'

// Funciones Puras
/* 
  Consisten en funciones que solo trabajan y realizan operaciones con los
  parametros que le pasamos, no utiliza otras variables, ni depende
  de otros datos, sólo de los que recibe por parametros.
*/

export const setFirstWeather = (state, action) => {
  switch (action.type) {
    case SELECT_CITY:
      return { ...state, citySelected: action.payload};
      break;

    default: return state;
      break;
  }
};
