import { useContext } from 'react';
import { MyContext } from './208_supreme_hooks_context.jsx';

const BigBox = () => {
  return (
    <div>
      <MiddleBox />
    </div>
  );
};

const MiddleBox = () => {
  return (
    <div>
      <SmallBox />
      <SmallBox />
    </div>
  );
};

const SmallBox = () => {
  const name = useContext(MyContext);
  return (
    <div>
      <p>I am {name}</p>
    </div>
  );
};

// -------------------------------------------------------------------------------
// задание
// -------------------------------------------------------------------------------
const Parent = () => {
  return (
    <div>
      <Daughter />
    </div>
  );
};

const Daughter = () => {
  return (
    <div>
      <Grandson />
    </div>
  );
};

const Grandson = () => {
  const age = useContext(MyContext) / 2;
  return (
    <div>
      <p>I am {age} yrs old</p>
    </div>
  );
};

export { Parent };
