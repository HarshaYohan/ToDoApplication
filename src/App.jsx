import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/taskForm.jsx";
import TaskColumn from "./components/TaskColumn.jsx";
import ToDoIcon from "./assets/hit.png";
import DoingIcon from "./assets/star.png";
import DoneIcon from "./assets/check.png";

const oldTasks = localStorage.getItem("tasks");
console.log(oldTasks);

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.getItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };
  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          title="ToDo" 
          icon={ToDoIcon}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Doing"
          icon={DoingIcon}
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Done"
          icon={DoneIcon}
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
