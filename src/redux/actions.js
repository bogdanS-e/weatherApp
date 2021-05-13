import { CITY_NOT_FOUND, SET_CITY } from './constants';

export function setCity(city, weatherList) {
  const {name, country} = city;
  return {
    type: SET_CITY,
    payload: {
      city: {
        name, 
        country
      },
      weatherList
    },
  };
}

export function cityNotFound(cityName) {
  return {
    type: CITY_NOT_FOUND,
    payload: {
      city: {
        name: cityName
      }
    },
  };
}