export const Component = ({ name, age }) => {
  // вот так еще можно задать пропсы
  //   const { name = "", age = 0 } = props;

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
};
