export const Table = () => {
  const users = [
    { id: 1, name: "user1", surn: "surn1", age: 30 },
    { id: 2, name: "user2", surn: "surn2", age: 31 },
    { id: 3, name: "user3", surn: "surn3", age: 32 },
  ];

  const rows = users.map(function (item) {
    return (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.surn}</td>
        <td>{item.age}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <td>имя</td>
          <td>фамилия</td>
          <td>возраст</td>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};
