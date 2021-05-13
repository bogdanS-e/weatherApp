import { combineReducers } from 'redux';
import { CITY_NOT_FOUND, SET_CITY } from './constants';

const initState = {
  city: {
    name: null,
    country: null
  },
  weatherList: null,
  error: false,
  isWeatherFetched: false
};

const weatherReducer = (state = initState, action) => {

  switch (action.type) {
  case SET_CITY:
    return { ...action.payload, error: false, isWeatherFetched: true };

  case CITY_NOT_FOUND:
    return { ...initState, ...action.payload, error: true, isWeatherFetched: true };

  default: return state;
  }
};

const rootReducer = combineReducers({
  weather: weatherReducer,
});

export default rootReducer;