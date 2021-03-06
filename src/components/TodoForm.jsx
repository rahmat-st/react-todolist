import React, { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ addTodo, showTodoForm }) => {
  const [value, setValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!value.trim()) {
      alert("No blank todo!");
      return;
    }

    addTodo(value);
    setValue("");
  };

  return (
    showTodoForm && (
      <section className="form-add-todo">
        <form className="add-form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="add-input"
            maxLength={20}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="btn">Add</button>
        </form>
      </section>
    )
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showTodoForm: PropTypes.bool.isRequired
};

export default TodoForm;
