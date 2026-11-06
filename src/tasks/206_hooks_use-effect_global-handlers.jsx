import { useEffect, useState } from 'react';

export const GlobalHandlers = () => {
  const [color, setColor] = useState('green');
  const [block, blockIsVisible] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  useEffect(() => {
    document.body.style.backgroundColor = color;

    window.addEventListener('click', handleEnter);

    return () => {
      window.removeEventListener('click', handleEnter);
    };
  }, [color]);

  const handleEnter = (event) => {
    // if (event.keyCode === 13) {
    color === 'green' ? setColor('red') : setColor('green');
    // }

    blockIsVisible(false);
  };

  const handleBlock = (event) => {
    event.stopPropagation();
    blockIsVisible(true);
  };

  return (
    <div>
      <h1>React App</h1>
      <a href="#1234" onClick={handleBlock}>
        это ссылка
      </a>
      {block && <div id="1234">всем дарова</div>}
    </div>
  );
};
