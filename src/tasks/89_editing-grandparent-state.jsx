import { useState } from 'react';

const User = ({ id, name, surname, isBanned, toggleMode, editUser }) => {
  return (
    <div>
      name:{' '}
      <UserField
        id={id}
        text={name}
        type="name"
        isBanned={isBanned}
        editUser={editUser}
      />
      <br />
      surname:{' '}
      <UserField
        id={id}
        text={surname}
        type="surname"
        isBanned={isBanned}
        editUser={editUser}
      />
      <button onClick={() => toggleMode(id)}>
        {isBanned ? 'save' : 'edit'}
      </button>
    </div>
  );
};

const UserField = ({ id, text, type, isBanned, editUser }) => {
  return isBanned ? (
    <input value={text} onChange={(event) => editUser(id, type, event)} />
  ) : (
    <span>{text}</span>
  );
};

const initUsers = [
  { id: 1, name: 'name1', surname: 'surname1', isBanned: false },
  { id: 2, name: 'name2', surname: 'surname2', isBanned: false },
  { id: 3, name: 'name3', surname: 'surname3', isBanned: false },
];

export const EditGrandParent = () => {
  const [users, setUsers] = useState(initUsers);

  const HandleClick = (id) => {
    setUsers(
      users.map((user) => {
        if (user.id === id) {
          return { ...user, isBanned: !user.isBanned };
        }

        return user;
      }),
    );
  };

  const editUser = (id, field, event) => {
    const value = event.target.value;
    setUsers(
      users.map((user) => {
        if (user.id === id) {
          return { ...user, [field]: value };
        }

        return user;
      }),
    );
  };

  const result = users.map((user) => {
    return (
      <>
        <User
          key={user.id}
          // id={prod.id}
          // name={prod.name}
          // cost={prod.cost}
          // isEdit={prod.isEdit}
          {...user}
          toggleMode={HandleClick}
          editUser={editUser}
        />
        <br />
      </>
    );
  });

  return <div>{result}</div>;
};
