/**
 * Create a Sagas
 * This is where the asynchronous logic will reside.
 * We will handle fetchig and add the todos
 */

import axios from "axios";
import {
  ADD_TODO_REQUEST,
  addTodoFailure,
  addTodoSuccess,
  FETCH_TODO_REQUEST,
  fetchTodoFailure,
  fetchTodoSuccess,
  Todo,
} from "../actions/todoActions";
import { call, put, takeEvery } from "redux-saga/effects";

const fetchTodosFromApi = async (): Promise<Todo[]> => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return response.data;
};

const addTodoToApi = async (todo: Todo): Promise<Todo> => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/todos",
    todo
  );
  return response.data;
};

// Worker Saga: fetch tasks

function* fetchTodosSaga() {
  try {
    const todos: Todo[] = yield call(fetchTodosFromApi);
    yield put(fetchTodoSuccess(todos));
  } catch (error: any) {
    yield put(fetchTodoFailure(error.message));
  }
}

function* addTodosSaga(action: { type: string; payload: Todo }) {
  try {
    const todo: Todo = yield call(addTodoToApi, action.payload);
    yield put(addTodoSuccess(todo));
  } catch (error: any) {
    yield put(addTodoFailure(error.message));
  }
}

// Watcher Sagas
function* todoSaga() {
  yield takeEvery(FETCH_TODO_REQUEST, fetchTodosSaga);
  yield takeEvery(ADD_TODO_REQUEST, addTodosSaga);
}

export default todoSaga;
