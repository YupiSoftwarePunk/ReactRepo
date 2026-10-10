import { useState } from "react";

export const User = (props) => {
  return (
    <tr>
      <td>
        name: <span>{props.name}</span>
      </td>
      ,
      <td>
        surname: <span>{props.surname}</span>
      </td>
      ,
      <td>
        age: <span>{props.age}</span>
      </td>
    </tr>
  );
};
