import { useState } from "react";

export const States = () => {
  const [isBan, setIsBan] = useState(false);

  let ban = <button onClick={() => setIsBan(false)}>разбанить</button>;
  let unban = <button onClick={() => setIsBan(true)}>забанить</button>;

  return (
    <div>
      <span>{isBan ? "забанен" : "не забанен"}</span>
      <br />
      {isBan ? ban : unban}
    </div>
  );
};
