import { useState } from "react";

export const ObjArrOperats = () => {
  const initNotes = [
    {
      id: "GYi9G_uC4gBF1e2SixDvu",
      prop1: "value11",
      prop2: "value12",
      prop3: "value13",
    },
    {
      id: "IWSpfBPSV3SXgRF87uO74",
      prop1: "value21",
      prop2: "value22",
      prop3: "value23",
    },
    {
      id: "JAmjRlfQT8rLTm5tG2m1L",
      prop1: "value31",
      prop2: "value32",
      prop3: "value33",
    },
  ];

  const [notes, setNotes] = useState(initNotes);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [editId, setEditId] = useState("");

  const doSmth = (id) => {
    setNotes(
      notes.map((note) => {
        if (note.id === id) {
          note.prop1 += "!";
          note.prop2 += "!";
          note.prop2 += "!";

          return note;
        }

        return note;
      }),
    );
  };

  const Delete = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  const TransferToInput = (note) => {
    setInput1(note.prop1);
    setInput2(note.prop2);
    setInput3(note.prop3);
  };

  const TransferToLi = (id) => {
    setNotes(
      notes.map((note) => {
        if (note.id === id) {
          note.prop1 = input1;
          note.prop2 = input2;
          note.prop3 = input3;

          return note;
        }

        return note;
      }),
    );
  };

  const result = notes.map((note) => {
    return (
      <li key={note.id}>
        <span>{note.prop1}</span>
        <span>{note.prop2}</span>
        <span>{note.prop3}</span>

        <button onClick={() => doSmth(note.id)}>btn</button>
        <button onClick={() => Delete(note.id)}>delete</button>
        <button
          onClick={() => {
            TransferToInput(note);
            setEditId(note.id);
          }}
        >
          перенести в инпут
        </button>
      </li>
    );
  });

  return (
    <>
      <input
        type="text"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
      <input
        type="text"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />
      <input
        type="text"
        value={input3}
        onChange={(e) => setInput3(e.target.value)}
      />
      <button onClick={() => TransferToLi(editId)}>
        перенести в элемент списка
      </button>
      <div>
        <ul>{result}</ul>
      </div>
    </>
  );
};
