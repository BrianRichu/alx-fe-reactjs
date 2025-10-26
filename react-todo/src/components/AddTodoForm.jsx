import { useState } from "react";

const AddTodoForm = ({ onAddTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    onAddTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} data-testid="todo-form">
      <input
        type="text"
        placeholder="Enter a new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        data-testid="todo-input"
        className="border p-2 w-3/4 rounded"
      />
      <button
        type="submit"
        data-testid="add-button"
        className="bg-blue-600 text-white px-4 py-2 ml-2 rounded"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
