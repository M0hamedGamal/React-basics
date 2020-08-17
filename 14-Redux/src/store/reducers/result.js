import * as actionTypes from "../actions";
const initState = {
  results: [],
};
// reducer --> is a function that takes two args [state, action] & return data [state].
const reducer = (state = initState, action) => {
  // action get info like type & val from dispatch function into Counter Component in this case.
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: action.counter,
        }),
      };

    case actionTypes.DELETE_RESULT:
      const newResults = state.results.filter(
        (result) => result.id !== action.idResult
      );

      return {
        ...state,
        results: newResults,
      };

    default:
      return state;
  }
};

export default reducer;
