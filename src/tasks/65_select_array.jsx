import { useState } from "react";

export const SelectArr = () => {
  const cities = ["город 1", "город 2", "город 3", "город 4"];
  const [value, setValue] = useState("");

  const options = cities.map((text, index) => {
    return <option key={index}>{text}</option>;
  });

  return (
    <div>
      <select value={value} onChange={(event) => setValue(event.target.value)}>
        {options}
      </select>
      <p>ваш выбор: {value}</p>
    </div>
  );
};
