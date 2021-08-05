import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "./../redux/todo/todoActions";

function Todo({ todo }) {
  const dispatch = useDispatch();
  return (
    <div>
      <span>{todo.title}</span>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </div>
  );
}

export default Todo;
