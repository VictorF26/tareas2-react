import React, { useState } from "react";

function Todo({ item, onUpdate, onDelete }) {
  const [idEdit, setIsEdit] = useState(false);

  function FormEdit() {
    const [newValue, setNewValue] = useState(item.title);
    const handleSubmit = (e) => {
      e.preventDefault();
    };

    const handleChange = (e) => {
      const value = e.target.value;
      setNewValue(value);
    };

    const handleClickUpdateTodo = (e) => {
        onUpdate(item.id, newValue);
        setIsEdit(false);
    };

    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoInput"
          onChange={handleChange}
          value={newValue}
        />
        <button className="button" onClick={handleClickUpdateTodo}>
          Update
        </button>
      </form>
    );
  }

  function TodoElement() {
    return (
      <div className="todoInfo">
        <span className="todoTitle" >{item.title}</span>
        <button className="button" onClick={(e) => setIsEdit(true)}>Edit</button>
        <button className="buttonDelete" onClick={(e) => onDelete(item.id)}>Delete</button>
      </div>
    );
  }
  return <div>{idEdit ? <FormEdit /> : <TodoElement />}</div>;
}

export default Todo;
