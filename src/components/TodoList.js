import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../redux";
import Todo from "./Todo";

function TodoList() {
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
      <div>
        {todo &&
          todo.todos &&
          todo.todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
      </div>
    </div>
  );
}
export default TodoList;
