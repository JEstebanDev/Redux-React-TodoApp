import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTask } from "../store/reducer";

export default function NewTask() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const addTask = () => {
    dispatch(addNewTask({ task }));
  };

  return (
    <div>
      <h2>New Task</h2>
      <div className="input-wrapper">
        <input
          className="input"
          name="text"
          placeholder="Type here..."
          type="text"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <br />
      <button className="add" onClick={addTask}>
        Add
      </button>
    </div>
  );
}
