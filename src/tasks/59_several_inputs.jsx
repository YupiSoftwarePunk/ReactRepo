import { useState } from "react";

export const SevInputs = () => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [value5, setValue5] = useState(0);

  function sum(nums) {
    return nums.reduce((sum, current) => sum + current, 0) / 5;
  }

  function handleChange(event) {
    setValue(event.target.value);
  }
  function handleChange2(event) {
    setValue2(event.target.value);
  }
  function handleChange3(event) {
    setValue3(event.target.value);
  }
  function handleChange4(event) {
    setValue4(event.target.value);
  }
  function handleChange5(event) {
    setValue5(event.target.value);
  }

  const res = [
    Number(value),
    Number(value2),
    Number(value3),
    Number(value4),
    Number(value5),
  ];

  return (
    <div>
      <input value={value} onChange={handleChange} />
      <input value={value2} onChange={handleChange2} />
      <input value={value3} onChange={handleChange3} />
      <input value={value4} onChange={handleChange4} />
      <input value={value5} onChange={handleChange5} />
      <p>{sum(res)}</p>
    </div>
  );
};
