import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  ADD_TODO,
  DELETE_TODO,
} from "./todoTypes";

const initialState = {
  loading: false,
  todos: [],
  error: "",
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_TODOS_SUCCESS:
      return {
        loading: false,
        todos: action.payload,
        error: "",
      };

    case FETCH_TODOS_FAILURE:
      return {
        loading: false,
        todos: [],
        error: action.payload,
      };

    case ADD_TODO:
      return {
        loading: false,
        todos: state.todos.concat(action.payload),
        error: "",
      };

    case DELETE_TODO:
      return {
        loading: false,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        error: "",
      };
    default:
      return state;
  }
};

export default todoReducer;
