import React, { useState } from "react";
import "./taskForm.css";
import Tag from "./Tag.jsx";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  const checkSelected = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="task_input"
          placeholder="Enter your task"
          onChange={handleChange}
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag
              tagName="HTML"
              selectTag={selectTag}
              selected={checkSelected("HTML")}
            />
            <Tag
              tagName="CSS"
              selectTag={selectTag}
              selected={checkSelected("CSS")}
            />
            <Tag
              tagName="React"
              selectTag={selectTag}
              selected={checkSelected("React")}
            />
            <Tag
              tagName="Javascript"
              selectTag={selectTag}
              selected={checkSelected("Javascript")}
            />
            <Tag
              tagName="Nodejs"
              selectTag={selectTag}
              selected={checkSelected("Nodejs")}
            />
          </div>
          <div>
            <select
              value={taskData.status}
              className="task_status"
              onChange={handleChange}
              name="status"
            >
              <option value="todo">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;

// If we pass the function handleSubmit as onClick, it will work only when the user click the button
// But, when we pass it as onSubmit, it will work both when the user click the submit botton or press enter key
