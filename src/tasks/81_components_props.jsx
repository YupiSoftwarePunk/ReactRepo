import { useState } from "react";

export const Employee = (props) => {
  return (
    <p>
      name: <span>{props.name}</span>, salary: <span>{props.salary}</span>
    </p>
  );
};
