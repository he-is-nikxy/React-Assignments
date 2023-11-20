import React, { useState } from "react";
import "./Tasks.css"

let Tasks = () => {
  let [task, setTask] = React.useState("");
  let [todos, setTodos] = React.useState([]);

  let taskInp = (event) => {
    setTask(event.target.value);
  };

  let addTask = () => {
    let newTask = {
      id: Math.random(),
      title: task,
      status: false,
    };
    let newTaskArr = [...todos, newTask];
    setTodos(newTaskArr);
    txt.value = "";
  };

  let markComplete = () => {
    {
      stts.textContent = "Status: Completed";
    }
  };

  let markDelete = (id) => {
    let myNewArr = todos.filter((ele) => id != ele.id);
    setTodos(myNewArr);
  };

  let PrintData = () => {
    return todos.map((ele) => (
      <div id="container">
        <h2>Unique ID: {ele.id}</h2>
        <h2>Task Name: {ele.title}</h2>
        <h4 id="stts">Status: {ele.status ? "Completed" : "Pending"}</h4>
        <button onClick={markComplete} className="completeBtn">
          Mark Complete
        </button>
        <button onClick={() => markDelete(ele.id)} className="deleteBtn">
          Delete
        </button>
        
      </div>
    ));
  };

  return (
    <>
      <input
        type="text"
        name=""
        id="txt"
        placeholder="Enter Task"
        onChange={taskInp}
      />
      <button onClick={addTask} className="addBtn">
        ADD
      </button>
      <div>
        <p className="para">
          <strong>N</strong>ew <strong>T</strong>asks :
        </p>
        <PrintData />
      </div>
    </>
  );
};


export default Tasks