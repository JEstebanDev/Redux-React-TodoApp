import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";
import apiTask from "./middleware/api";
import taskReducer from "./reducer";
import error from "./middleware/error";

const store = configureStore({
  reducer: taskReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    //logger,
    apiTask,
    error,
  ],
});

export default store;
