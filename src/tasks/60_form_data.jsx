import { useState } from "react";

export const FormData = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [result, setResult] = useState(0);

  function calculateDateRange(dateString1, dateString2) {
    const date1 = new Date(dateString1);
    const date2 = new Date(dateString2);

    const differenceInMs = Math.abs(date1 - date2);
    const differenceInDays = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));

    setResult(differenceInDays);
  }

  return (
    <div>
      <input
        type="date"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <input
        type="date"
        value={value2}
        onChange={(event) => setValue2(event.target.value)}
      />
      <button onClick={() => calculateDateRange(value, value2)}>
        разница между датами
      </button>
      <p>result: {result}</p>
    </div>
  );
};
