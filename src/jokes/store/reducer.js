import Action from "./action";

const initialState = {
  joke: "",
  error: false,
  message: "",
};

const jokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.FETCH_JOKE_SUCCESS:
      return {
        ...state,
        joke: action.payload.joke,
        error: false,
        message: "",
      };
    case Action.FETCH_JOKE_FAILED:
      return {
        ...state,
        joke: "",
        error: true,
        message: Action.payload.message,
      };
    default:
        return state;
  }
};
export default jokeReducer;