import React from "react";
import "./taskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, icon, tasks, status, handleDelete }) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img src={icon} alt="direct-hit" className="task_column_img" />
        {title}
      </h2>

      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              key={index}
              title={task.index}
              tags={task.tags}
              handleDelete={handleDelete}
              index={index}
            />
          )
      )}
    </section>
  );
};

export default TaskColumn;
