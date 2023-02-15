import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_API } from "./action";

const url = "/tasks";
const initialState = {
  tasks: [],
  loading: false,
  error: null,
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    API_REQUEST_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    GET_TASK: (state, action) => {
      state.tasks = action.payload;
      state.loading = false;
    },
    ADD_TASK: (state, action) => {
      state.tasks.push(action.payload);
    },
    REMOVE_TASK: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id == action.payload.id
      );
      state.tasks.splice(index, 1);
    },
    COMPLETED_TASK: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id == action.payload.id
      );
      state.tasks[index].completed = action.payload.completed;
    },
  },
});

export const loadTasks = () =>
  REQUEST_API({
    url,
    method: "GET",
    onSuccess: GET_TASK.type,
    onError: API_REQUEST_FAIL.type,
  });

export const addNewTask = (task) =>
  REQUEST_API({
    url,
    method: "POST",
    data: task,
    onSuccess: ADD_TASK.type,
    onError: API_REQUEST_FAIL.type,
  });

export const completeTask = (task) =>
  REQUEST_API({
    url: `${url}/${task.id}`,
    method: "PATCH",
    data: task,
    onSuccess: COMPLETED_TASK.type,
    onError: API_REQUEST_FAIL.type,
  });

export const deleteTask = (task) =>
  REQUEST_API({
    url: `${url}/${task.id}`,
    method: "DELETE",
    onSuccess: REMOVE_TASK.type,
    onError: API_REQUEST_FAIL.type,
  });

export const {
  API_REQUEST,
  API_REQUEST_FAIL,
  GET_TASK,
  ADD_TASK,
  REMOVE_TASK,
  COMPLETED_TASK,
} = taskSlice.actions;

export default taskSlice.reducer;
