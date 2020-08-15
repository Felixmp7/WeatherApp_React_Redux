// Store
import { createStore } from 'redux';
import { setFirstWeather } from '../reducers/city'

const initialState = {
  citySelected: null
};

// Reducer
/* 
  Función que recibe el state y el action, y suele retornar un nuevo estado.
*/


export const store = createStore(setFirstWeather, initialState,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
