import { useState, useEffect } from "react";

// используют для любых побочных эффектов, все кроме разметки, юзается в теле функции компонента
// используется в локалсторадж, сохранение или загрузка данных и так далее

// последовательность useEffect очень важна и если они пересекаются между собой,
// то это нужно правильно проработать

// мы вынессли useEffect к useState и теперь сразу при инициализации проверяется локалсторадж
//  и смотрится есть ли там что

// этот код выполняется еще до первого рендера
export const Comp22 = () => {
  const [tasks, setTasks] = useState(() => {
    const savedData = localStorage.getItem("tasks");
    if (savedData) {
      return JSON.parse(savedData);
    }
    return [
      { id: 1, name: "alex", age: 18 },
      { id: 2, name: "Mari", age: 22 },
    ];
  });

  useEffect(() => {
    // побочные действия
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]); // в [] лежат зависимости
};
