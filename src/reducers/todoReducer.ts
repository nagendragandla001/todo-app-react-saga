import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  AddTodoRequestAction,
  AddTodoSuccessAction,
  AddTodoFailureAction,
  FetchTodoRequestAction,
  FetchTodoSuccessAction,
  FetchTodoFailureAction,
  DeleteTodoRequestAction,
  DeleteTodoSuccessAction,
  DeleteTodoFailureAction,
  Todo,
} from "../actions/todoActions";

interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};

type TodoActionTypes =
  | FetchTodoRequestAction
  | FetchTodoSuccessAction
  | FetchTodoFailureAction
  | AddTodoRequestAction
  | AddTodoSuccessAction
  | AddTodoFailureAction
  | DeleteTodoRequestAction
  | DeleteTodoSuccessAction
  | DeleteTodoFailureAction;

const todoReducer = (
  state = initialState,
  action: TodoActionTypes
): TodoState => {
  switch (action.type) {
    case FETCH_TODO_REQUEST:
    case ADD_TODO_REQUEST:
    case DELETE_TODO_REQUEST:
      return { ...state, loading: true };
    case FETCH_TODO_SUCCESS:
      return { ...state, loading: false, todos: action.payload };
    case FETCH_TODO_FAILURE:
    case ADD_TODO_FAILURE:
    case DELETE_TODO_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: [action.payload, ...state.todos],
      };

    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: true } : todo
        ),
      };

    default:
      return state;
  }
};

export default todoReducer;
