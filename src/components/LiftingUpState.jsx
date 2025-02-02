import { useState } from "react";

function LiftingUpState() {
  const [input, setInput] = useState("");
  return (
    <>
      <InputValue input={input} setInput={setInput}></InputValue>
      <DisplayValue input={input}></DisplayValue>
    </>
  );
}

function InputValue({ input, setInput }) {
  // const [input, setInput] = useState(""); //lifting up state to share input with diplay value component
  return (
    <>
      <input
        type="text"
        placeholder="enter your text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      ></input>
    </>
  );
}

function DisplayValue({ input }) {
  return (
    <>
      <h1>The entered value is :{input}</h1>
    </>
  );
}
export default LiftingUpState;
