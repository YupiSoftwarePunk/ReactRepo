// import FirstComp from './07jsx_intro.jsx';
// import SecComp from './tasks/08jsx_returning_nested.jsx';
// import ThirdComp from './tasks/09jsx_returning_down.jsx';
// import {ReturnSeveral} from './tasks/10jsx_returning_several.jsx';
// import {ReturnUnclosed} from './tasks/11jsx_returning_unclosed.jsx';
// import {ReturningEmpty} from './tasks/12_jsx_returning_empty.jsx';
// import {Inserting} from './tasks/13_jsx_variables_inserting.jsx';
// import {VarNuances} from './tasks/14_jsx_variables_nuances.jsx';
// import {Arrays} from './tasks/15_jsx_variables_arrays.jsx';
// import {Objects} from './tasks/16_jsx_variables_objects.jsx';
// import {Attributes} from './tasks/17_jsx_variables_attributes.jsx';
// import {Tags} from './tasks/18_jsx_tags_intro.jsx';
// import {SevTags} from './tasks/19_jsx_tags_several.jsx';
// import {TagsMultiLine} from './tasks/20_jsx_tags_multi-line.jsx';
// import {TagsReturn} from './tasks/21_jsx_tags_return.jsx';
// import {ClosingTags} from './tasks/22_jsx_tags_closing.jsx';
// import {TagsCorrectness} from './tasks/23_jsx_tags_correctness.jsx';
// import {RunningCode3} from './tasks/24_jsx_running-code.jsx';
// import { TagsArr } from "./tasks/37_forming_tags-array.jsx";
import { useState } from "react";
import { User } from "./tasks/83_child-array.jsx";

function App() {
  // return <FirstComp/>;
  // return <ReturnSeveral/>;
  // return <RunningCode3/>;

  // const getDigitsSum = (num) =>
  //   Number(num % 10) + Number((num % 100) / 10) + Number(num / 100);
  // const res = Math.floor(getDigitsSum(123));
  // return <div>{res}</div>;

  // const doSmthng = () => alert("yooo");
  // const Mouse = () => alert("789789");
  // return (
  //   <button onClick={doSmthng} onMouseMove={Mouse}>
  //     click
  //   </button>
  // );

  // const show1 = () => alert(1);
  // const show2 = () => alert(2);

  // return (
  //   <div>
  //     <button onClick={show1}>act1</button>
  //     <button onClick={show2}>act2</button>
  //   </div>
  // );

  // const show = (num) => alert(num);

  // return (
  //   <div>
  //     <button onClick={() => show(1)}>act1</button>
  //     <button onClick={() => show(2)}>act2</button>
  //     <button onClick={() => show(3)}>act3</button>
  //   </div>
  // );

  // return (
  //   <div>
  //     <button onClick={(event) => console.log(event.target)}>act1</button>
  //     <button onClick={(event) => console.log(event)}>act2</button>
  //   </div>
  // );

  // const show = (a, event, b) => console.log(a, event, b);
  // return (
  //   <div>
  //     {/* <button onClick={(event) => console.log(event.target)}>act1</button> */}
  //     <button onClick={(event) => show(event, "damn", 67)}>act2</button>
  //   </div>
  // );

  // --------------- 82 ----------------------------------
  // const name1 = "Mike";
  // const cost1 = "1000";

  // const name2 = "John";
  // const cost2 = "2000";

  // const name3 = "Dan";
  // const cost3 = "3000";

  // return (
  //   <div>
  //     <Employee name={name1} salary={cost1} />
  //     <Employee name={name2} salary={cost2} />
  //     <Employee name={name3} salary={cost3} />
  //   </div>
  // );

  // --------------- 83 ----------------------------------
  const users = [
    { id: 0, name: "user1", surname: "surn1", age: 30 },
    { id: 1, name: "user2", surname: "surn2", age: 31 },
    { id: 2, name: "user3", surname: "surn3", age: 32 },
  ];

  //   return (
  //     <table>
  //       <thead>
  //         <tr>
  //           <th>Имя</th>
  //           <th>Фамилия</th>
  //           <th>Возраст</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {users.map((user) => (
  //           <User
  //             key={user.id}
  //             name={user.name}
  //             surname={user.surn}
  //             age={user.age}
  //           />
  //         ))}
  //       </tbody>
  //     </table>
  //   );
  // }

  // ---------------- 84 ------------------------
  // const result = users.map((prod) => {
  //   return (
  //     <User
  //       key={prod.id}
  //       name={prod.name}
  //       surname={prod.surname}
  //       age={prod.age}
  //     />
  //   );
  // });

  // return <div>{result}</div>;

  // ------------------ 85 ---------------------
  const initUsers = [
    { id: 0, name: "user1", surname: "surn1", age: 30 },
    { id: 1, name: "user2", surname: "surn2", age: 31 },
    { id: 2, name: "user3", surname: "surn3", age: 32 },
  ];

  const initProds = () => {};

  const [prods, setProds] = useState(initProds);

  const items = prods.map((prod) => {
    return <User key={prod.id} name={prod.name} cost={prod.cost} />;
  });

  return <div>{items}</div>;
}

export default App;
