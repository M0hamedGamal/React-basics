import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";

// combine two or more Reducers into one Reducer with one global state.
const rootReducer = combineReducers({
  // counterReducer and resultReducer are sub states.
  ctrReducer: counterReducer,
  resReducer: resultReducer,
});

// createStore --> is a function that takes reducer & work with reducer & state.
const store = createStore(rootReducer);

ReactDOM.render(
  // Provider --> is a HOC for all of Application, and it takes our store [that takes reducer as a param] into its store property.
  // store prop makes all of Components connect with state into reducer.js.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
