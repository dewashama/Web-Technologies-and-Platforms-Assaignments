import { Link } from "react-router-dom";

function TodoItem({ todo, dispatch }) {
  return (
    <div
      className={`p-5 rounded-xl shadow-md flex justify-between items-start mb-4 transition transform
        ${todo.completed ? "bg-gray-100" : "bg-white hover:shadow-xl hover:scale-105"}
        border-l-4 ${todo.priority === "High" ? "border-red-500" : todo.priority === "Medium" ? "border-yellow-400" : "border-green-400"}`}
    >
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-lg text-gray-800">{todo.title}</h3>
        {todo.description && (
          <p className="text-gray-600 text-sm">{todo.description}</p>
        )}
        <span
          className={`mt-1 text-sm font-medium ${
            todo.completed ? "text-green-600" : "text-yellow-600"
          }`}
        >
          {todo.completed ? "Completed" : "Pending"}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <button
          onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}
          className={`px-4 py-2 rounded font-medium transition
            ${todo.completed
              ? "bg-yellow-500 hover:bg-yellow-600 text-white"
              : "bg-green-500 hover:bg-green-600 text-white"
            }`}
        >
          {todo.completed ? "Mark Pending" : "Mark Completed"}
        </button>

        <Link
          to={`/edit/${todo.id}`}
          className="px-4 py-2 bg-blue-500 rounded font-medium text-white hover:bg-blue-600 transition text-center"
        >
          Edit
        </Link>

        <button
          onClick={() => dispatch({ type: "DELETE", payload: todo.id })}
          className="px-4 py-2 bg-red-500 rounded font-medium text-white hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
