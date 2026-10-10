import { useState } from "react";

export const ArrOperations = () => {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);

  const Square = (index) => {
    let copy = Object.assign([], notes);
    copy[index] *= copy[index];
    setNotes(copy);
  };

  const Delete = (index) => {
    let copy = Object.assign([], notes);
    copy[index] -= copy[index];
    setNotes(copy);
  };

  const result = notes.map((note, index) => {
    return (
      <li key={index} onClick={() => Delete(index)}>
        {note}
      </li>
    );
  });

  return (
    <div>
      <ul>{result}</ul>
    </div>
  );
};
