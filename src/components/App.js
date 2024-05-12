import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryClick(category) {
    setSelectedCategory(category);
  }

  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask])
  }

  const filteredTasks = tasks.filter(task => task.category === selectedCategory || selectedCategory === "All");

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategoryClick={handleCategoryClick} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={filteredTasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
