import { useState } from "react";

export const DataShowing = () => {
  const initNotes = [
    {
      id: crypto.randomUUID(),
      name: "name1",
      desc: "long description 1",
      show: false,
    },
    {
      id: crypto.randomUUID(),
      name: "name2",
      desc: "long description 2",
      show: false,
    },
    {
      id: crypto.randomUUID(),
      name: "name3",
      desc: "long description 3",
      show: false,
    },
  ];

  const SHowDescr = (id) => {
    const copy = notes.map((note) => {
      if (note.id === id) {
        return { ...note, show: true };
      }
      return note;
    });
    setNotes(copy);
  };

  const [notes, setNotes] = useState(initNotes);

  const result = notes.map((note) => {
    return (
      <>
        <p key={note.id}>
          {note.name},<i>{note.show ? note.desc : ""}</i>
        </p>
        <button onClick={() => SHowDescr(note.id)}>показать описание</button>
      </>
    );
  });

  return <div>{result}</div>;
};
