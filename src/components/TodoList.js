import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../redux";
import Todo from "./Todo";

function TodoList() {
  const [filter, setFilter] = useState("All");
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return todo.loading ? (
    <h2>Loading</h2>
  ) : todo.error ? (
    <h2>{todo.error}</h2>
  ) : (
    <div>
      <h2>Todo List</h2>

      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
      <button onClick={() => setFilter("incompleted")}>Incompleted</button>
      <p></p>

      <div>
        {todo &&
          todo.todos &&
          filter === "All" &&
          todo.todos.map((todo) => <Todo key={todo.id} todo={todo} />)}

        {todo &&
          todo.todos &&
          filter === "completed" &&
          todo.todos
            .filter((todo) => todo.completed === true)
            .map((todo) => <Todo key={todo.id} todo={todo} />)}

        {todo &&
          todo.todos &&
          filter === "incompleted" &&
          todo.todos
            .filter((todo) => todo.completed === false)
            .map((todo) => <Todo key={todo.id} todo={todo} />)}
      </div>
    </div>
  );
}
export default TodoList;
