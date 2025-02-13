import "./ToDo.css";
import { MdCheck, MdDeleteForever } from "react-icons/md";
import { useEffect, useState } from "react";
function ToDo() {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [timeDate, setDateTime] = useState("");

  const handleInput = (value) => {
    setInputValue(value);
    console.log("handleInput");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) {
      return;
    }
    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }
    // setTask([...task, inputValue]); // concatenate previous values of array with current inputvalue using spread operator
    setTask((prevTask) => [...prevTask, inputValue]);
    setInputValue("");
    console.log("handleInputvalue");
  };

  // const date = new Date();
  // const formattedDate = date.toLocaleDateString();
  // const formattedTime = date.toLocaleTimeString();

  // const getDateTime = () => {
  //   setInterval(() => {
  //     const date = new Date();
  //     const formattedDate = date.toLocaleDateString();
  //     const formattedTime = date.toLocaleTimeString();
  //     console.log(`${formattedDate} - ${formattedTime}`);
  //   }, 1000);

  // console.log("hii");
  // setInterval(() => {
  //   const date = new Date();
  //   const formattedDate = date.toLocaleDateString();
  //   const formattedTime = date.toLocaleTimeString();
  //   // console.log(`${formattedDate} - ${formattedTime}`);
  //   setDateTime(`${formattedDate} - ${formattedTime}`);
  // }, 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const formattedDate = date.toLocaleDateString();
      const formattedTime = date.toLocaleTimeString();
      // console.log(`${formattedDate} - ${formattedTime}`);
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval); //this function provided by useeffect .useeffect is like setInterval
  }, []);

  const handleDelete = (currTask) => {
    const updatedTask = task.filter((tsk) => tsk !== currTask);
    console.log("updatedTask", updatedTask);
    setTask(updatedTask);
  };
  const handleBtnClear = () => {
    // console.log("task=>", task);
    // task.length = 0;
    // setTask(task);
    //2nd way
    setTask([]);
    // console.log("task=>", task);
  };
  return (
    <>
      <section className="todo-container">
        <header className="header">
          <h1>Todo List</h1>
          <h2>{timeDate}</h2>
        </header>
        <section>
          <form onSubmit={handleFormSubmit} className="form">
            <div>
              <input
                type="text"
                value={inputValue}
                onChange={(event) => handleInput(event.target.value)}
              />
            </div>
            <div>
              <button type="submit">Add Task</button>
            </div>
          </form>
        </section>
        <section>
          <ul className="myUnOrdList">
            {task.map((currTask, index) => (
              <li key={index} className="todo-item">
                <span>{currTask}</span>
                <button className="check-btn">
                  <MdCheck></MdCheck>
                </button>
                <button
                  onClick={() => handleDelete(currTask)}
                  className="delete-btn"
                >
                  <MdDeleteForever></MdDeleteForever>
                </button>
              </li>
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
