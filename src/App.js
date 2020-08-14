import React from 'react';
import WeatherApp from './pages/home/weatherApp';
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
