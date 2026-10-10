import { useState } from "react";

const initUsers = [
  { id: 0, name: "user1", isBanned: false },
  { id: 1, name: "user2", isBanned: false },
  { id: 2, name: "user3", isBanned: false },
];

export const Users = () => {
  const [users, setUsers] = useState(initUsers);

  function banUser(id) {
    setUsers(
      users.map((user) => {
        if (user.id === id) {
          return { ...user, isBanned: true };
        }
        return user;
      }),
    );
  }

  const items = users.map((user) => {
    return (
      <User
        key={user.id}
        id={user.id}
        name={user.name}
        isBanned={user.isBanned}
        banUser={banUser}
      />
    );
  });

  return (
    <div>
      <h3>Список пользователей:</h3>
      {items}
    </div>
  );
};

export const User = ({ id, name, isBanned, banUser }) => {
  return (
    <div>
      Имя: <span>{name}</span>, Статус:{" "}
      <span>{isBanned ? "Забанен" : "Активен"}</span>
      <button onClick={() => banUser(id)} disabled={isBanned}>
        {isBanned ? "Уже забанен" : "Забанить"}
      </button>
    </div>
  );
};
