import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "./../redux/todo/todoActions";

function Todo({ todo }) {
  const dispatch = useDispatch();
  return (
    <div>
      <span
        onClick={() => dispatch(toggleTodo(todo.id))}
        style={{ cursor: "pointer" }}
        className={todo.completed ? "strike" : ""}
      >
        {todo.title}
      </span>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </div>
  );
}

export default Todo;
