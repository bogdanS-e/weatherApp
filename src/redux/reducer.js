import { combineReducers } from 'redux';

const initState = {};

const weatherReducer = (state = initState, action) => {
  switch (action.type) {
  default: return state;
  }
};

const rootReducer = combineReducers({
  weather: weatherReducer,
});

export default rootReducer;