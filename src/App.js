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
import { SelectForm } from "./tasks/64_select_intro.jsx";

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

  return <SelectForm />;
}

export default App;
