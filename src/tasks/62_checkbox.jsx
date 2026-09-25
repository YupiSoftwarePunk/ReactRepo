import { useState } from "react";

export const Checkbox = () => {
  const [checked, setChecked] = useState(true);
  const [message, setMessage] = useState("");

  function handlePress() {
    return checked ? setMessage("привет") : setMessage("пока");
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <button onClick={() => handlePress()}>click me</button>
      <br />
      {<p>{message}</p>}
    </div>
  );
};
