import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getWeather } from '../../api/weather';
import { cityNotFound, setCity } from '../../redux/actions';
import Spinner from '../spinner';
import './style.scss';

const Input = () => {
  const dispatch = useDispatch();

  const [cityName, setCityName] = useState('');
  const [isPending, setIsPending] = useState(false);

  const inputCity = (event) => {
    const newValue = event.target.value;
    if (newValue.match('^[a-zA-Zа-яА-яІіЇї]+(?:[\\s-][a-zA-Zа-яА-яІіЇї]*)*$') || newValue === '') {
      setCityName(newValue);
    }
  };

  const fetchWeather = useCallback(() => {
    setIsPending(true);
    getWeather(cityName)
      .then(({ data }) => {
        const { city, list } = data;
        dispatch(setCity(city, list.slice(0, 7)));     //I took only first 7 elements
      })
      .catch((error) => {
        const { status } = error.response;
        if (status === 404) {
          dispatch(cityNotFound(cityName));
        }
      }).finally(() => setIsPending(false));

  }, [cityName]);

  return (
    <div className='form-group'>
      <input
        autoFocus={true}
        onChange={inputCity}
        value={cityName}
        type='input'
        className='form-field'
        placeholder='City name'
        id='name'
      />
      <label htmlFor='name' className='form-label'>City name</label>
      <div className='controller-wrapper'>
        {
          isPending ? <Spinner />
            : <button
              disabled={cityName === ''}
              style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/search.svg')` }}
              className='search-button'
              onClick={fetchWeather}
            />
        }
      </div>
    </div>
  );
};

export default Input;