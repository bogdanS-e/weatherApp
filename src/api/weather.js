import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_WEATHER_URL
});

export const getWeather = (cityName) => {
  return instance.get(`/forecast?q=${cityName}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`);
};