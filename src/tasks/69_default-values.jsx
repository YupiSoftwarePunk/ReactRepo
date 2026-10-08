import { useState } from "react";

export const DefaultVal = () => {
  const [checked, setChecked] = useState(true);

  return (
    <div>
      <input type="checkbox" value="1" defaultChecked={!checked} />
      <br />
      <input type="checkbox" value="2" defaultChecked={checked} />
      <br />
      <input type="checkbox" value="3" defaultChecked={!checked} />
      <br />
      <input type="checkbox" value="4" defaultChecked={checked} />
      <br />
      <input type="checkbox" value="5" defaultChecked={!checked} />
      <br />
      <input type="checkbox" value="6" defaultChecked={checked} />
      <br />
    </div>
  );
};
