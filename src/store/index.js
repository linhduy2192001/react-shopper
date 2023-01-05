import { combineReducers, createStore } from "redux";
import pageReducer from "./pageReducer";

const reducer = combineReducers({ page: pageReducer });

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
