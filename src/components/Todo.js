import React from "react";

function Todo({ todo }) {
  return (
    <div>
      <span>{todo.title}</span>
      <button>Delete</button>
    </div>
  );
}

export default Todo;
