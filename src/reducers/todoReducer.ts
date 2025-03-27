import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  AddTodoRequestAction,
  AddTodoSuccessAction,
  AddTodoFailureAction,
  FetchTodoRequestAction,
  FetchTodoSuccessAction,
  FetchTodoFailureAction,
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
  | AddTodoFailureAction;

const todoReducer = (
  state = initialState,
  action: TodoActionTypes
): TodoState => {
  switch (action.type) {
    case FETCH_TODO_REQUEST:
    case ADD_TODO_REQUEST:
      return { ...state, loading: true };
    case FETCH_TODO_SUCCESS:
      return { ...state, loading: false, todos: action.payload };
    case FETCH_TODO_FAILURE:
    case ADD_TODO_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};

export default todoReducer;
