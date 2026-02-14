import { useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AddTodo from "./pages/AddTodo";
import EditTodo from "./pages/EditTodo";

const initialState = JSON.parse(localStorage.getItem("todos")) || [];

function reducer(state, action) {
  let updated;
  switch (action.type) {
    case "ADD":
      updated = [...state, action.payload];
      localStorage.setItem("todos", JSON.stringify(updated));
      return updated;
    case "UPDATE":
      updated = state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
      localStorage.setItem("todos", JSON.stringify(updated));
      return updated;
    case "DELETE":
      updated = state.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(updated));
      return updated;
    case "TOGGLE":
      updated = state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      localStorage.setItem("todos", JSON.stringify(updated));
      return updated;
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home todos={todos} dispatch={dispatch} />} />
        <Route path="/add" element={<AddTodo dispatch={dispatch} />} />
        <Route
          path="/edit/:id"
          element={<EditTodo todos={todos} dispatch={dispatch} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
