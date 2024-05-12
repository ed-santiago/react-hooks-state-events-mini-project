import React from "react";
import Task from "./Task";

function TaskList({ tasks, setTasks }) {
  function handleDelete(text) {
    const deleteElement = tasks.filter((task) => task.text !== text)
    setTasks(deleteElement)
  }

  const taskElements = tasks.map((task, index) => {
    return (
      <Task
        key={index + 1}
        category={task.category}
        text={task.text}
        handleDelete={handleDelete}
      />
    )
  })

  return (
    <div className="tasks">
      {taskElements}
    </div>
  );
}

export default TaskList;
