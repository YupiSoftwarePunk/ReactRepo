import { useState } from "react";

export const InputBunding = () => {
  const initDate = {
    year: 2025,
    month: 12,
    day: 31,
  };

  const handleChange = (prop, event) => {
    setObj({ ...obj, ...{ [prop]: event.target.value } });
  };

  const [obj, setObj] = useState(initDate);

  return (
    <div>
      <input
        value={obj.year}
        onChange={(event) => handleChange("year", event)}
      />
      <input
        value={obj.month}
        onChange={(event) => handleChange("month", event)}
      />
      <input value={obj.day} onChange={(event) => handleChange("day", event)} />
      <br />
      {obj.year}-{obj.month}-{obj.day}
    </div>
  );
};
