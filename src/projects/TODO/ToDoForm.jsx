import { useState } from "react";

export const ToDoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState({});
  const handleInput = (value) => {
    setInputValue({ id: value, content: value, checked: false });
    console.log("handleInput");
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue({ id: "", content: "", checked: false });
  };
  return (
    <section>
      <form onSubmit={handleFormSubmit} className="form">
        <div>
          <input
            type="text"
            value={inputValue.content}
            onChange={(event) => handleInput(event.target.value)}
          />
        </div>
        <div>
          <button type="submit">Add Task</button>
        </div>
      </form>
    </section>
  );
};
