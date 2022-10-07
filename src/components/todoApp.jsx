import React, { useState } from "react";
import Todo from './todo'
import './todoApp.css'

function TodoApp() {
  const [title, setTitle] = useState('');
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
    setTitle('');
  };

  function handleUpdate(id, value){
    const temp = [...todos];
    const item = temp.find(item => item.id == id)
    item.title = value;
    setTodos(temp)
  }

  function handleDelete(id){
    const temp=todos.filter(item => item.id != id);
    setTodos(temp);
  }

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
          <Todo key={item.id} item={item} onDelete={handleDelete} onUpdate={handleUpdate} />
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
