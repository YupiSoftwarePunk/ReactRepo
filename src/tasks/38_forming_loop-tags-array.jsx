export const LoopTags = () => {
  const arr = [];

  for (let i = 0; i <= 9; i++) {
    arr.push(<li>{i}</li>);
  }

  return <ul>{arr}</ul>;
};
