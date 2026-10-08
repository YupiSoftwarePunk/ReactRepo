import { useState } from "react";

export const Radio = () => {
  const [value, setValue] = useState("");

  function changeHandler(event) {
    setValue(event.target.value);
  }

  return (
    <>
      <p>Выберите ваш любимый ЯП</p>
      <div>
        <label>
          <input
            type="radio"
            name="language"
            value="JavaScript"
            checked={value === "JavaScript"}
            onChange={changeHandler}
          />
        </label>
        <label>
          <input
            type="radio"
            name="language"
            value="C++"
            checked={value === "C++"}
            onChange={changeHandler}
          />
        </label>
        <label>
          <input
            type="radio"
            name="language"
            value="C#"
            checked={value === "C#"}
            onChange={changeHandler}
          />
        </label>
      </div>

      <p>ваш выбор: {value}</p>
      {value === "JavaScript" ? (
        <p>вы маладесь, правильный выбор</p>
      ) : (
        <p>вы не маладесь, ужасный выбор</p>
      )}
    </>
  );
};
