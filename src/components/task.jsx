import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../store/reducer";
export default function Task({ item }) {
  const dispatch = useDispatch();
  const status = (state) => {
    return state ? "completed" : "incomplete";
  };

  const complete = () => {
    dispatch(completeTask({ id: item.id, completed: !item.completed }));
  };

  const remove = () => {
    dispatch(deleteTask({ id: item.id }));
  };

  return (
    <div className="card">
      <button className="removed" onClick={remove}>
        X
      </button>
      <div className="data">
        <h4>TASK #{item.id}</h4>
        <span>{item.task}</span>
        <br />
        <button className={status(item.completed)} onClick={complete}>
          {item.completed ? "Completed" : "Incomplete"}
        </button>
      </div>
    </div>
  );
}
