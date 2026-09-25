import { useState } from "react";

export const SelectForm = () => {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <select value={value} onChange={handleChange}>
        <option>город 1</option>
        <option>город 2</option>
        <option>город 3</option>
        <option>город 4</option>
      </select>
      <p>ваш выбор: {value}</p>
    </div>
  );
};
