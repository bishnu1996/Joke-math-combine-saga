import MathAction from './action';

const initialState = {
  fact: "",
  error: false,
  messageSuccess: "",
  messageError: "",
};

const mathFactReducer = (state = initialState, action) => {
  switch (action.type) {
    case MathAction.MATH_SUCCESS_FACT:
      return {
        ...state,
        fact: action.payload.fact,
        error: false,
        messageSuccess: action.payload.messageSuccess,
        messageError: "",
      };
    case MathAction.MATH_FAILED_FACT:
      return {
        ...state,
        fact: "",
        error: true,
        messageSuccess: "",
        messageError: action.payload.messageError,
      };
    default:
      return state;
  }
};

export default mathFactReducer;