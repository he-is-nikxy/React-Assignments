import React, { useState } from "react";

const Tasks = () => {
  let [task, setTask] = useState("");

  let [allTasks, setAllTasks] = useState([]);

  let login = (e) => {
    e.preventDefault();

    let newArr = { task: task };
    setAllTasks([...allTasks, newArr]);

    setTask("");
  };

  return (
    <>
      <form onSubmit={login}>
        <div>
          <label htmlFor="">Enter Tasks:</label>
          <br />
          <input
            type="text"
            name="task"
            id="task"
            placeholder="Enter Task"
            value={task}
            onChange={(eve) => setTask(eve.target.value)}
          />
        </div>

        <button type="submit">Login</button>
      </form>
      <div>
        <h2>Tasks: </h2>
        {allTasks.map((ele) => {
          return (
            <div>
              <p>Tasks: {ele.task}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Tasks;
