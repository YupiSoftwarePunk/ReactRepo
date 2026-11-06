import { useEffect, useState } from 'react';

export const Dependencies = () => {
  const [name, setName] = useState('anatoly');

  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]);

  const changeName = () => {
    setName('dimka');
  };

  return (
    <div>
      <h1>React App</h1>
      <p>{name}</p>
      <button onClick={changeName}>change name</button>
    </div>
  );
};
