import "./State.css";
import { useState } from "react";
function State() {
  let value = 0;
  // const handleBtnIncrement = () => {
  //   console.log(value);
  //   value++;
  // };
  // const array = useState();
  // console.log(array)
  const [count, setCount] = useState(0);

  const handleBtnIncrement = () => {
    console.log("Parent rendered!");
    setCount(() => count + 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button
        className="text-3xl font-bold underline"
        onClick={handleBtnIncrement}
      >
        Increment
      </button>
      <ChildComponent></ChildComponent>
    </>
  );
}

function ChildComponent() {
  console.log("child rendered!");
  return (
    <>
      <h1>CHILD COMPONENT</h1>
    </>
  );
}
export default State;
