import { ITodoState, TodoAction, TodoActionTypes } from "../../types/todo";

const initialstate: ITodoState = {
  todos: [],
  page: 1,
  error: null,
  limit: 10,
  loading: false
}

export const todoReducer = (state: ITodoState = initialstate, action: TodoAction): ITodoState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS:
      return {
        ...state,
        loading: true
      }
    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload
      }
    case TodoActionTypes.FETCH_TODOS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case TodoActionTypes.SET_TODO_PAGE:
      return {
        ...state,
        page: action.payload
      }
    default:
      return state
  }
}