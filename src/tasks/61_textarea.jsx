import { useState } from "react";

export const TextArea = () => {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  const ru = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "yo",
    ж: "zh",
    з: "z",
    и: "i",
    й: "j",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "c",
    ч: "ch",
    ш: "sh",
    щ: "sch",
    ъ: "",
    ы: "y",
    ь: "",
    э: "e",
    ю: "yu",
    я: "ya",
  };

  const translit = (text) => {
    let res = "";
    for (const i of text) {
      res += ru[i] ?? i;
    }
    return res;
  };

  return (
    <div>
      <textarea value={value} onChange={handleChange} />
      <p>{translit(value)}</p>
    </div>
  );
};
