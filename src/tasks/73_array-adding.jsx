import { useState } from "react";

export const ArrAdd = () => {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);

  const result = notes.map((note, index) => {
    return <li key={index}>{note}</li>;
  });

  return (
    <>
      <button onClick={() => setNotes([...notes, notes.length + 1])}>
        добавить запись
      </button>
      <br />
      <input type="text" />
      <button
        onClick={() =>
          setNotes([...notes, document.querySelector("input").value])
        }
      >
        добавить запись с надписью из инпута
      </button>
      <div>
        <ul>{result}</ul>
      </div>
    </>
  );
};
