import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-indigo-600 tracking-wide"
        >
          NotesEra
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-indigo-600">
            Home
          </Link>
          <Link to="/articles" className="hover:text-indigo-600">
            Articles
          </Link>
          <Link to="/create" className="hover:text-indigo-600">
            Write
          </Link>
        </div>

        {/* AUTH BUTTONS */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="text-sm text-gray-700 hover:text-indigo-600"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm hover:bg-indigo-700"
          >
            Sign Up
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4 text-sm">
          <Link to="/" onClick={() => setOpen(false)} className="block">
            Home
          </Link>
          <Link to="/articles" onClick={() => setOpen(false)} className="block">
            Articles
          </Link>
          <Link to="/create" onClick={() => setOpen(false)} className="block">
            Write
          </Link>
          <Link to="/login" onClick={() => setOpen(false)} className="block">
            Login
          </Link>
          <Link
            to="/signup"
            onClick={() => setOpen(false)}
            className="block bg-indigo-600 text-white px-4 py-2 rounded-lg text-center"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
