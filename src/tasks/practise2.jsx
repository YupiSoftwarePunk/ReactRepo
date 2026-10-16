// import { useState, useEffect, useRef } from "react";

// export const Practise2 = () => {
//   const [input, setInput] = useState("");
//   const [pass, setPass] = useState("");

//   const inputRef = useRef(null);
//   const passRef = useRef(null);

//   const handleClick = () => {
//     if (!input && !pass) {
//       alert("все путем");
//     } else if (!input && pass) {
//       alert("заполните поле логина");
//       passRef.current.focus();
//     } else if (input && !pass) {
//       alert("заполните поле пароля");
//       inputRef.current.focus();
//     } else if (input && pass) {
//       alert("все путем");
//     }
//   };

//   return (
//     <>
//       email:{" "}
//       <input
//         ref={inputRef}
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <br />
//       password:{" "}
//       <input
//         ref={passRef}
//         type="password"
//         value={pass}
//         onChange={(e) => setPass(e.target.value)}
//       />
//       <button onClick={handleClick}>send</button>
//     </>
//   );
// };

import { useRef } from "react";
export const Practise2 = () => {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current++;
  };

  const showCount = () => {
    alert("u clicked " + countRef.current + " times");
  };

  return (
    <>
      <button onClick={handleClick}>click me</button>
      <br />
      <button onClick={showCount}>show clicks</button>
    </>
  );
};
