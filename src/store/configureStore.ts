import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import todoSaga from "../sagas/taskSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore<any, any>(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(todoSaga);

export default store;
