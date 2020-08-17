const redux = require("redux");

const createStore = redux.createStore;

// state.
const initialState = {
  counter: 0,
};

// Reducer.
//state = initialState --> initialState is default value for state var.
const rootReducer = (state = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }

  if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }
  return state;
};

// Store.
const store = createStore(rootReducer);
// getState --> function that get updated state from store.
console.log(store.getState());

// Function auto run after dispatching, or changing for state.
store.subscribe(() => {
  console.log("[Subscribe]: ", store.getState());
});

// Dispatching Action.
// 'type' property is V.IMPORTANT for dispatch function. Don't forget it.
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
console.log(store.getState());
