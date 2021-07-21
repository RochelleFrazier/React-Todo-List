import React, { useState, useEffect, useRef } from "react";
import { VscAdd } from "react-icons/vsc";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form>
      <>
        <input
          placeholder="Enter Task"
          value={input}
          onChange={handleChange}
          name="text"
          className="todo-input"
          ref={inputRef}
        />
        <button onClick={handleSubmit} className="todo-button add">
          <VscAdd />
        </button>
        <br />
        <br />
      </>
    </form>
  );
}

export default TodoForm;
