import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          NotesEra
        </Link>

        <div className="flex gap-6 items-center">
          <Link to="/">Home</Link>
          <Link to="/all-articles">Articles</Link>

          {/* 🔐 ADMIN ONLY */}
          {user?.role === "admin" && (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <Link
                to="/create-blog"
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
              >
                Create Blog
              </Link>
            </>
          )}

          <span className="text-sm text-gray-500">
            Role: {user.role}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
