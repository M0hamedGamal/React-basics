import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";
import thunk from "redux-thunk";

// combine two or more Reducers into one Reducer with one global state.
const rootReducer = combineReducers({
  // counterReducer and resultReducer are sub states.
  ctrReducer: counterReducer,
  resReducer: resultReducer,
});

// Middleware Function for async methods that receives store.
const logger = (store) => {
  // return function that receives next function.
  // next function tell middleware to goto next action to compelete the cycle.
  return (next) => {
    // return function that receives action.
    return (action) => {
      console.log("[Middleware dispatching]: ", action);
      // important to call next method to continue.
      const result = next(action);
      console.log("[Middleware next State]: ", store.getState());
      // return next function.
      return result;
    };
  };
};

// compose --> combine two or more enhancers [middlewares] into one applyMiddleware with one global state.
// composeEnhancers --> allow us use redux dev tools into google chrome.
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// createStore --> is a function that takes reducer, middleware & work with reducer & state.
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  // Provider --> is a HOC for all of Application, and it takes our store [that takes reducer as a param] into its store property.
  // store prop makes all of Components connect with state into reducer.js.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
