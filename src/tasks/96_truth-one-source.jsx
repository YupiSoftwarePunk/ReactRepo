import { getValue } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';

export const TruthOneSOurce = () => {
  const [temp, setTemp] = useState(0);
  const [temp2, setTemp2] = useState(32);

  const handleChange = (event) => {
    setTemp(event.target.value);
    setTemp2(Math.round(event.target.value * 1.8 + 32));
  };

  const handleChange2 = (event) => {
    setTemp(Math.round(((event.target.value - 32) * 5) / 9));
    setTemp2(event.target.value);
  };

  const countKelvin = (temp) => Math.round(temp + 273.15);

  const countFarenheit = (temp) => Math.round(temp * 1.8 + 32);

  const countFarCelsium = (temp2) => Math.round(temp2 - 273.15);

  const countFarKelvin = (temp2) => Math.round(((temp2 - 32) * 5) / 9 + 273.15);

  return (
    <div>
      <Verdict
        temp={temp}
        countFarenheit={countFarenheit}
        countKelvin={countKelvin}
      />
      <TempInp
        temp={temp}
        handleChange={handleChange}
        temp2={temp2}
        handleChange2={handleChange2}
      />
    </div>
  );
};

const TempInp = ({ temp, handleChange, temp2, handleChange2 }) => {
  return (
    <>
      <div>введите темпу в цельсиях </div>
      <input onChange={handleChange} value={temp} />
      <br />
      <div>введите темпу в фаренгейтах </div>
      <input onChange={handleChange2} value={temp2} />
    </>
  );
};

const Verdict = ({ temp, countFarenheit, countKelvin }) => {
  return (
    <>
      <div>градусы в Цельсиях: {temp}</div>
      <div>градусы в Кельвинах: {countKelvin(temp)}</div>
      <div>градусы в Фаренгейтах: {countFarenheit(temp)}</div>
    </>
  );
};
