export const increment = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "INC",
      payload: amount,
    });
  };
};

export const decrement = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "DEC",
      payload: amount,
    });
  };
};

export const reset = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "RESET",
      payload: amount,
    });
  };
};