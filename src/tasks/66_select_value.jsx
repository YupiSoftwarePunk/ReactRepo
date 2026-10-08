import { useState } from "react";

export const SelectVal = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <select value={value} onChange={(event) => setValue(event.target.value)}>
        <option value="1">от 0 до 12</option>
        <option value="2">от 13 до 17</option>
        <option value="3">от 18 до 25</option>
        <option value="4">старше 25</option>
      </select>
      <p>
        {value === "1" && "вы в возрастной категории от 0 до 12"}
        {value === "2" && "вы в возрастной категории от 13 до 17"}
        {value === "3" && "вы в возрастной категории от 18 до 25"}
        {value === "4" && "вы в возрастной категории старше 25"}
      </p>
    </div>
  );
};
