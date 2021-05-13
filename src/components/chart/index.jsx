import React from 'react';
import PropTypes from 'prop-types';
import {
  LineChart,
  XAxis,
  Tooltip,
  CartesianGrid,
  Line,
  YAxis
} from 'recharts';
import parseWeather from '../../utils/parseWeather';
import './style.scss';
const Chart = ({ city, weatherList }) => {
  const { name, country } = city;

  const parsedWeather = parseWeather(weatherList);

  return (
    <div className='chart'>
      <h2 className='title'>{`${country}, ${name}`}</h2>
      <LineChart
        width={900}
        height={400}
        data={parsedWeather}
      >
        <XAxis dataKey='date' />
        <Tooltip />
        <Line unit='°C' type="monotone" dataKey="temp" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <YAxis />
      </LineChart>
    </div>
  );
};

Chart.propTypes = {
  city: PropTypes.object,
  weatherList: PropTypes.array
};

export default Chart;