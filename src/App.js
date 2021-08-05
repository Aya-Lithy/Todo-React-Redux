import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AddTodo />
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
