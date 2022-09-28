import React, { useState } from "react";

function NewTaskForm({ onTaskSubmit, categories }) {

  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  function handleSubmit(event) {
    event.preventDefault();
    onTaskSubmit({ text, category });
    setText("Pass the tests");
    setCategory("Code");
  }

  <form className="new-task-form" onSubmit={handleSubmit}></form>
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
      </label>
      <label>
        Category
        <select value={category} onChange={(event) => setCategory(event.target.value)}>
          {/* render <option> elements for each category here */}
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
