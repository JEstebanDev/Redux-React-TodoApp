import { ERROR_API } from "../action";

const error = (store) => (next) => (action) => {
  if (action.type === ERROR_API.type) {
    console.log("Error", action.payload.error);
    next(action);
  } else {
    next(action);
  }
};

export default error;
