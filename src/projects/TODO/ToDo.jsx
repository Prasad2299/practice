import "./ToDo.css";
import { MdCheck, MdDeleteForever } from "react-icons/md";
import { useEffect, useState } from "react";
import { ToDoForm } from "./ToDoForm";
import { ToDoList } from "./ToDoList";
import { ToDoDate } from "./ToDoDate";
function ToDo() {
  const [task, setTask] = useState([]);

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!inputValue) {
      return;
    }
    // if (task.includes(inputValue)) {
    //   return;
    // }

    const isMatched = task.find((currTask) => currTask.content === content);

    if (isMatched) {
      return;
    }
    setTask((prevTask) => [...prevTask, { id, content, checked }]);
    console.log("handleInputvalue");
  };

  const handleDelete = (currTask) => {
    const updatedTask = task.filter((tsk) => tsk.content !== currTask);
    console.log("updatedTask", updatedTask);
    setTask(updatedTask);
  };

  const handleCheckedTodo = (data) => {
    const updatedTask = task.map((currTask) => {
      if (currTask.content === data) {
        return { ...currTask, checked: !currTask.checked };
      } else {
        return currTask;
      }
    });
    setTask(updatedTask);
    console.log("updatedTask", updatedTask);
    console.log("checked");
  };
  const handleBtnClear = () => {
    setTask([]);
  };

  return (
    <>
      <section className="todo-container">
        <header className="header">
          <h1>Todo List</h1>
          <ToDoDate></ToDoDate>
        </header>
        <ToDoForm onAddTodo={handleFormSubmit}></ToDoForm>
        <section>
          <ul className="myUnOrdList">
            {task.map((currTask) => (
              <ToDoList
                key={currTask.id}
                data={currTask.content}
                checked={currTask.checked}
                onDeleteToDo={handleDelete}
                onCheckedToDo={handleCheckedTodo}
              ></ToDoList>
            ))}
          </ul>
        </section>
        <section>
          <button className="clear-btn" onClick={handleBtnClear}>
            Clear All
          </button>
        </section>
      </section>
    </>
  );
}
export default ToDo;
