import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTodo({ dispatch }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    dispatch({
      type: "ADD",
      payload: {
        id: Date.now(),
        title,
        description,
        completed: false,
        priority,
      },
    });

    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-4">Add Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Task title"
          className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select
          className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="Low">Low Priority</option>
        </select>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 hover:scale-105 transition">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
