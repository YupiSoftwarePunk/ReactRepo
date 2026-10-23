import { useState } from 'react';

const User = ({ id, name, surname, isBanned, changeField, editUser }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>
        <UserField
          id={id}
          text={name}
          type="name"
          isBanned={isBanned}
          editUser={editUser}
          changeField={changeField}
        />
      </td>
      <td>
        <UserField
          id={id}
          text={surname}
          type="surname"
          isBanned={isBanned}
          editUser={editUser}
          changeField={changeField}
        />
      </td>
      {/* <td>
        <button onClick={() => changeField(id)}>
          {!isBanned ? 'save' : 'edit'}
        </button>
      </td> */}
    </tr>
  );
};

const UserField = ({ id, text, type, isBanned, editUser, changeField }) => {
  if (isBanned) {
    return (
      <>
        <input value={text} onChange={(event) => editUser(id, type, event)} />
        <button onClick={() => changeField(id)}>сохранить</button>
      </>
    );
  }
  return (
    <span onClick={() => changeField(id)} style={{ cursor: 'pointer' }}>
      {text}
    </span>
  );
};

const initUsers = [
  { id: 1, name: 'name1', surname: 'surname1', isBanned: false },
  { id: 2, name: 'name2', surname: 'surname2', isBanned: false },
  { id: 3, name: 'name3', surname: 'surname3', isBanned: false },
];

export const ModelsViaStates = () => {
  const [users, setUsers] = useState(initUsers);
  const [isEditing, setIsEditing] = useState(false);

  const changeField = (id) => {
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
      <User
        key={user.id}
        {...user}
        changeField={changeField}
        editUser={editUser}
      />
    );
  });

  return (
    <div>
      <table>
        <tbody>{result}</tbody>
      </table>
    </div>
  );
};
