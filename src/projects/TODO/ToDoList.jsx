import { MdCheck, MdDeleteForever } from "react-icons/md";

export const ToDoList = ({ data, checked, onDeleteToDo, onCheckedToDo }) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <button className="check-btn">
        <MdCheck onClick={() => onCheckedToDo(data)}></MdCheck>
      </button>
      <button onClick={() => onDeleteToDo(data)} className="delete-btn">
        <MdDeleteForever></MdDeleteForever>
      </button>
    </li>
  );
};
