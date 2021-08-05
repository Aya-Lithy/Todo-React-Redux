import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todo/todoActions";

const AddTodo = () => {
  const [input, setInput] = useState(undefined);
  const dispatch = useDispatch();
  return (
    <div>
      <input onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => dispatch(addTodo(input))}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
