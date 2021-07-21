import { FaTrash } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const Todo = ({ todos, completeTodo, removeTodo }) => {
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>

      <div className="icon">
        <FaCheck onClick={() => completeTodo(todo.id)} className="check-icon" />
        &nbsp; &nbsp;
        <FaTrash onClick={() => removeTodo(todo.id)} className="delete-icon" />
      </div>
    </div>
  ));
};

export default Todo;
