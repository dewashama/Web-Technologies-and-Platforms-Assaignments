import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-600 text-white px-6 p-5 flex justify-between items-center shadow-md sticky top-0 z-10">
      <h1 className="text-3xl font-bold tracking-wide">My To-Do App</h1>
      <nav className="space-x-6 text-lg">
        <Link
          to="/"
          className="text-white hover:underline hover:text-white-200 transition"
        >
          Home
        </Link>
        <Link
          to="/add"
          className="text-white hover:underline hover:text-white-200 transition"
        >
          Add Task
        </Link>
      </nav>
    </header>
  );
}

export default Header;
