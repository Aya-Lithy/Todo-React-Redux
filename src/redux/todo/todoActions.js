import axios from "axios";
import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  DELETE_TODO,
  ADD_TODO,
} from "./todoTypes";

let nextTodoId = 201;

export const fetchTodosRequest = () => {
  return {
    type: FETCH_TODOS_REQUEST,
  };
};

export const fetchTodosSuccess = (todos) => {
  return {
    type: FETCH_TODOS_SUCCESS,
    payload: todos,
  };
};

export const fetchTodosFailure = (error) => {
  return {
    type: FETCH_TODOS_FAILURE,
    payload: error,
  };
};

export const addTodo = (title) => {
  return {
    type: ADD_TODO,
    payload: {
      id: ++nextTodoId,
      title,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(fetchTodosRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        const todos = response.data;
        dispatch(fetchTodosSuccess(todos));
      })
      .catch((error) => {
        dispatch(fetchTodosFailure(error.message));
      });
  };
};
