import React, { useState } from "react";

function TodoApp() {
  const [title, setTitle] = useState("Hola");
  const [todos, setTodos] = useState([]);
  const handleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="todo"
          type="text"
          value={title}
        />
        <input
          onClick={handleSubmit}
          type="submit"
          value="Create todo"
          className="buttonCreate"
        />
      </form>

      <div className="todosContainer">
        {todos.map((item) => (
          <div key={item.id} >{item.title}</div>
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
