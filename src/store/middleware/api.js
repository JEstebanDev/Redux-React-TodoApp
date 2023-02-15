import axios from "axios";
import { REQUEST_API, ERROR_API } from "../action";
let a = 0;
const apiTask =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== REQUEST_API.type) return next(action);
    const { url, method, data, onStart, onSuccess, onError } = action.payload;
    if (onStart) dispatch({ type: onStart });
    try {
      const response = await axios.request({
        baseURL: "http://localhost:5000/api",
        url,
        method,
        data,
      });
      dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      dispatch({ type: onError, payload: { error: error.message } });
      dispatch({ type: ERROR_API.type, payload: { error: error.message } });
    }
  };

export default apiTask;
