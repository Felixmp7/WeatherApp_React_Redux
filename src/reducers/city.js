import { SELECT_CITY } from '../actions/index'

export const setFirstWeather = (state, action) => {
  switch (action.type) {
    case SELECT_CITY:
      return { ...state, citySelected: action.value}
      break;

    default: return state;
      break;
  }
};
