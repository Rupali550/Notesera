import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-indigo-600">
        NotesEra
      </Link>

      {/* Links */}
      <div className="flex items-center gap-6">
        <Link to="/" className="text-gray-700 hover:text-indigo-600">
          Home
        </Link>

        <Link
          to="/all-articles"
          className="text-gray-700 hover:text-indigo-600"
        >
          Articles
        </Link>

        {/* ✅ Admin only */}
        {user?.role === "admin" && (
          <Link
            to="/create-blog"
            className="text-gray-700 hover:text-indigo-600"
          >
            Create Blog
          </Link>
        )}

        {/* Auth buttons */}
        {!user && (
          <>
            <Link
              to="/login"
              className="px-4 py-2 border rounded-lg hover:bg-gray-100"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Signup
            </Link>
          </>
        )}

        {/* Logged-in user */}
        {user && (
          <>
            <span className="text-sm text-gray-600">
              Hi, <b>{user.name}</b>
            </span>
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
