import { useState } from "react";
import TodoList from "../components/TodoList";

function Home({ todos, dispatch }) {
  const [filter, setFilter] = useState("ALL");
  const [search, setSearch] = useState("");

  const filteredTodos = todos
    .filter((todo) =>
      filter === "ALL"
        ? true
        : filter === "COMPLETED"
        ? todo.completed
        : !todo.completed
    )
    .filter((todo) => todo.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <div className="flex gap-3">
          {["ALL", "PENDING", "COMPLETED"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full font-medium transition
                ${filter === f
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Search tasks..."
          className="border p-3 rounded-lg flex-1 shadow focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <TodoList todos={filteredTodos} dispatch={dispatch} />
    </div>
  );
}

export default Home;
