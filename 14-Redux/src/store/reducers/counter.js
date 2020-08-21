import * as actionTypes from "../actions/actionTypes";
const initState = {
  counter: 0,
};
// reducer --> is a function that takes two args [state, action] & return data [state].
const reducer = (state = initState, action) => {
  // action get info like type & val from dispatch function into Counter Component in this case.
  switch (action.type) {
    case actionTypes.INC:
      return {
        ...state,
        counter: state.counter + 1,
      };

    case actionTypes.DEC:
      return {
        ...state,
        counter: state.counter - 1,
      };

    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.val,
      };

    case actionTypes.SUB:
      return {
        ...state,
        counter: state.counter - action.val,
      };

    default:
      return state;
  }
};

export default reducer;
