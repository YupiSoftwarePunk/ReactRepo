import { useState } from "react";

export const ArrDding = () => {
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
  const [input, setInput] = useState({ p1: "", p2: "", p3: "" });

  const AddLi = () => {
    let copy = [...notes];
    copy.push({
      id: "какой-то-новый-id",
      prop1: "новое_значение_1",
      prop2: "новое_значение_2",
      prop3: "новое_значение_3",
    });
    setNotes(copy);
  };

  const AddLi2 = () => {
    let copy = [...notes];
    copy.push({
      id: "какой-то-новый-id",
      prop1: input.p1,
      prop2: input.p2,
      prop3: input.p3,
    });
    setNotes(copy);
  };

  const result = notes.map((note) => {
    return (
      <li key={note.id}>
        <span>{note.prop1}</span>
        <span>{note.prop2}</span>
        <span>{note.prop3}</span>
      </li>
    );
  });

  return (
    <>
      <input
        type="text"
        onChange={(e) => setInput({ ...input, p1: e.target.value })}
      />
      <input
        type="text"
        onChange={(e) => setInput({ ...input, p2: e.target.value })}
      />
      <input
        type="text"
        onChange={(e) => setInput({ ...input, p3: e.target.value })}
      />
      <button onClick={AddLi2}>добавить новый элемент со значением</button>
      <br />
      <button onClick={AddLi}>добавить новый элемент в список</button>
      <div>
        <ul>{result}</ul>
      </div>
    </>
  );
};
