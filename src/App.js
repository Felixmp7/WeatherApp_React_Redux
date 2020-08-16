import React from 'react';
import WeatherApp from './weatherApp';
import { Provider } from 'react-redux'
import { store } from "./store/index";


const App = () => (
  <Provider
    store={store}
  >
    <WeatherApp/>
  </Provider>
);

export default App;
