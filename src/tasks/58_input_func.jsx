import { useState } from "react";

export const InputFunc = () => {
  const [value, setValue] = useState(0);

  function fahrenheytToCelcium(num) {
    return ((num - 32) * 5) / 9;
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <input value={value} onChange={handleChange} />
      <p>{fahrenheytToCelcium(value)}</p>
    </div>
  );
};
