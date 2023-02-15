import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTasks } from "./store/reducer";
import "./App.css";
import Task from "./components/task";
import NewTask from "./components/newTask";
function App() {
  const dispatch = useDispatch();
  const taskSlice = useSelector((state) => state.tasks);
  useEffect(() => {
    dispatch(loadTasks());
  }, []);
  return (
    <div>
      <NewTask></NewTask>
      <div className="container">
        {taskSlice.length > 0 &&
          taskSlice.map((item) => <Task key={item.id} item={item}></Task>)}
      </div>
    </div>
  );
}
export default App;
