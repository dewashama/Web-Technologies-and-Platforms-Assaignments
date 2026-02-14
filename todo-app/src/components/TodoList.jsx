import TodoItem from "./TodoItem";

function TodoList({ todos, dispatch }) {
  if (todos.length === 0) {
    return (
      <div className="text-center text-gray-400 mt-10">
        <p className="text-lg">No tasks found</p>
      </div>
    );
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
}

export default TodoList;
