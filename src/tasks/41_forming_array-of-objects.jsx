export const ArrObjects = () => {
  const users = [
    { name: "user1", surn: "surn1", age: 30 },
    { name: "user2", surn: "surn2", age: 31 },
    { name: "user3", surn: "surn3", age: 32 },
  ];

  const res = users.map(function (item, index) {
    return (
      <li key={index}>
        <span>{item.name}</span> <span>{item.surn}</span>:{" "}
        <span>{item.age} лет</span>
      </li>
    );
  });

  return <ul>{res}</ul>;
};
