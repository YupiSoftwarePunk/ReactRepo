import { useState } from "react";

export const ConditRender = () => {
  const [checked, setChecked] = useState(true);

  let message;
  if (checked) {
    message = <div>
        <h2>Ура, вам уже есть 18</h2>
            <p>
                здесь расположен контент только для взрослых
            </p>
        </div>;
  } else {
    message = <div>
            <p>
                увы, вам еще нет 18 лет:(
            </p>
        </div>;
  }

  return (
    <div>
        <h1>Вам > 18?</h1>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <div>{message}</div>
    </div>
  );
};
