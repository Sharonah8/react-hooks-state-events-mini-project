import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [category, getCategory] = useState('All')

  function onTaskSubmit(dataObj) {
    setTasks([...tasks, dataObj])
  }

  function onDelete(text) {
    setTasks(tasks.filter(item => item.text !== text))
  }

  function onGetCategory(event) {
    getCategory(event)
  }

  const filteredTasks = tasks.filter((task) => {
    if (category === "All") {
      return true
    } else {
      return task.category === category
    }
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} getCategory={getCategory} onGetCategory={onGetCategory} />
      <NewTaskForm onTaskSubmit={onTaskSubmit} categories={CATEGORIES.filter((cat) => cat !== "All")} />
      <TaskList tasks={filteredTasks} onDelete={onDelete} />
    </div>
  );
}

export default App;
