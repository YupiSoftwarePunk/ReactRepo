import { useState } from "react";

export const ArrOperations = () => {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
  const [inputt, setInput] = useState("");
  const [index, setIndex] = useState("");

  const Square = (index) => {
    let copy = [...notes];
    copy[index] *= copy[index];
    setNotes(copy);
  };

  const Delete = (indexToDelete) => {
    const copy = notes.filter((note, idx) => idx !== indexToDelete);
    setNotes(copy);
  };

  const InputShow = (text) => {
    setInput(text);
  };

  const InputEdit = (text) => {
    setInput(text);
    let copy = Object.assign([], notes);
    copy[index] = text;
    setNotes(copy);
  };

  const Reverse = () => {
    let copy = Object.assign([], notes);
    copy.reverse();
    setNotes(copy);
  };

  const result = notes.map((note, index) => {
    return (
      <>
        <li
          key={index}
          onClick={() => {
            InputEdit(note);
            setIndex(index);
          }}
        >
          {note}
        </li>
        <button onClick={() => Delete(index)}>удалить</button>
      </>
    );
  });

  return (
    <>
      <button onClick={Reverse}>перевернуть список</button>
      <div>
        <ul>{result}</ul>
      </div>
      <input
        value={inputt}
        type="text"
        onChange={(e) => setInput(e.target.value)}
        onBlur={(e) => InputEdit(e.target.value)}
      />
    </>
  );
};
