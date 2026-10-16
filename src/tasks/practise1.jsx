import { useState, useEffect } from "react";

export const Practise1 = () => {
  const [elements, setElements] = useState([
    "элемент 1",
    "элемент 2",
    "элемент 3",
    "элемент 4",
    "элемент 5",
    "элемент 6",
    "элемент 7",
    "элемент 8",
  ]);

  const [inputValue, setInputValue] = useState(() => {
    return localStorage.getItem("searchValue") || "";
  });

  useEffect(() => {
    console.log("Поиск по запросу:", inputValue);
    localStorage.setItem("searchValue", inputValue);
  }, [inputValue]);

  const filteredElements = elements.filter((el) =>
    el.toLowerCase().includes(inputValue.toLowerCase()),
  );

  return (
    <div>
      <h3>список</h3>
      <br />
      input:{" "}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br />
      <ul>
        {filteredElements.length > 0 ? (
          filteredElements.map((el, index) => <li key={index}>{el}</li>)
        ) : (
          <li>Ничего не найдено</li>
        )}
      </ul>
    </div>
  );
};
