export const FETCH_TODO_REQUEST = "FETCH_TODO_REQUEST";
export const FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS";
export const FETCH_TODO_FAILURE = "FETCH_TODO_FAILURE";

export const ADD_TODO_REQUEST = "ADD_TODO_REQUEST";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_FAILURE = "ADD_TODO_FAILURE";

export const DELETE_TODO_REQUEST = "DELETE_TODO_REQUEST";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_FAILURE = "DELETE_TODO_FAILURE";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodoRequestAction {
  type: typeof FETCH_TODO_REQUEST;
}

export interface FetchTodoSuccessAction {
  type: typeof FETCH_TODO_SUCCESS;
  payload: Todo[];
}

export interface FetchTodoFailureAction {
  type: typeof FETCH_TODO_FAILURE;
  payload: string;
}

export interface AddTodoRequestAction {
  type: typeof ADD_TODO_REQUEST;
  payload: Todo;
}

export interface AddTodoSuccessAction {
  type: typeof ADD_TODO_SUCCESS;
  payload: Todo;
}

export interface AddTodoFailureAction {
  type: typeof ADD_TODO_FAILURE;
  payload: string;
}

export interface DeleteTodoRequestAction {
  type: typeof DELETE_TODO_REQUEST;
  payload: number;
}

export interface DeleteTodoSuccessAction {
  type: typeof DELETE_TODO_SUCCESS;
  payload: number;
}

export interface DeleteTodoFailureAction {
  type: typeof DELETE_TODO_FAILURE;
  payload: string;
}

export const fetchTodoRequest = (): FetchTodoRequestAction => ({
  type: FETCH_TODO_REQUEST,
});

export const fetchTodoSuccess = (todos: Todo[]): FetchTodoSuccessAction => ({
  type: FETCH_TODO_SUCCESS,
  payload: todos,
});
export const fetchTodoFailure = (error: string): FetchTodoFailureAction => ({
  type: FETCH_TODO_FAILURE,
  payload: error,
});

export const addTodoRequest = (todo: Todo): AddTodoRequestAction => ({
  type: ADD_TODO_REQUEST,
  payload: todo,
});
export const addTodoSuccess = (todo: Todo): AddTodoSuccessAction => ({
  type: ADD_TODO_SUCCESS,
  payload: todo,
});
export const addTodoFailure = (error: string): AddTodoFailureAction => ({
  type: ADD_TODO_FAILURE,
  payload: error,
});

export const deleteTodoRequest = (id: number): DeleteTodoRequestAction => ({
  type: DELETE_TODO_REQUEST,
  payload: id,
});

export const deleteTodoSuccess = (id: number): DeleteTodoSuccessAction => ({
  type: DELETE_TODO_SUCCESS,
  payload: id,
});

export const deleteTodoFailure = (error: string): DeleteTodoFailureAction => ({
  type: DELETE_TODO_FAILURE,
  payload: error,
});
