import { useState } from "react";

export const InputForm = () => {
  const [value, setValue] = useState(0);

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <input value={value} onChange={handleChange} />
      <p>{value.toString().length}</p>
    </div>
  );
};
