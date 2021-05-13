import React from 'react';
import { useSelector } from 'react-redux';
import { selectWeather } from '../redux/selectors';
import Chart from './chart';
import Input from './input';
import './style.scss';

const App = () => {
  const { city, weatherList, error, isWeatherFetched } = useSelector(selectWeather);

  return (
    <div className='App'>
      <header className='header'>
        <div className='container'>
          <h1 className='title'>Find out about the weather in your city</h1>
        </div>
      </header>
      <main>
        <div className='column'>
          <Input />
        </div>
        <div className='column'>
          {
            isWeatherFetched && (
              error ? <h2 className='title'>Can not found city: {city.name}</h2> :
                <Chart {...{ city, weatherList }} />
            )
          }
        </div>
      </main>
    </div>
  );
};

export default App;