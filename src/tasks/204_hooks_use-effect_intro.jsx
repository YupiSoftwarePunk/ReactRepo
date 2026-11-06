import { useEffect, useState } from 'react';

export const Hooks = () => {
  //   const [color, setColor] = useState('green');
  const [title, setTitle] = useState('hello');
  useEffect(() => {
    document.title = 'hello world';
    console.log('док смонтирован');
  }, [title]);

  //   const changeTitle = () => {
  //     setTitle('orange');
  //   };

  return (
    <div>
      <h1>React App</h1>
      {/* <button onClick={changeTitle}>change title</button> */}
    </div>
  );
};
