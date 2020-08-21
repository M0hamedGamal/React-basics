import * as actionTypes from "./actionTypes";
// Middleware functions for sync & async code.
// sync code.
const saveResult = (ctr) => {
  return { type: actionTypes.STORE_RESULT, counter: ctr };
};

// Now it's asyc code cause setTimeout.
export const storeResult = (ctr) => {
  // dispatch is received from redux-thunk lib [middleware].
  return (dispatch) => {
    // Put here async code like fetch data from api.
    setTimeout(() => {
      // call sync code into dispatch method.
      dispatch(saveResult(ctr));
    }, 2000);
  };
};

export const deleteResult = (id) => {
  return { type: actionTypes.DELETE_RESULT, idResult: id };
};
