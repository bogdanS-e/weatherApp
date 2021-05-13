import moment from 'moment';

export default (weatherArray) => {
  if(!Array.isArray(weatherArray)) return;
  
  return weatherArray.map((entity) => {
    const {dt_txt, main} = entity;
    const date = moment(dt_txt).format('D.MM HH:mm');
    const temp = main.temp;
    return {
      date,
      temp
    };
  });
};