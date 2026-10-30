import { useState } from 'react';

export const LiftingStateUp = () => {
  const [temp, setTemp] = useState(0);

  const handleChange = (event) => {
    setTemp(event.target.value);
  };

  return (
    <div>
      <Verdict temp={temp} />
      <br />
      <TempInp temp={temp} handleChange={handleChange} />
    </div>
  );
};

const TempInp = ({ temp, handleChange }) => {
  return (
    <>
      <div>введите темпу </div>
      <input onChange={handleChange} value={temp} />
    </>
  );
};

const Verdict = ({ temp }) => {
  let text = 'Вода';
  if (Number(temp) > 100) {
    text = 'пар';
  } else if (Number(temp) < 0) {
    text = 'лед';
  }
  return <div>состояние жидкости: {text}</div>;
};
