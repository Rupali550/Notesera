import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">NotesEra</h2>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            NotesEra is a modern blogging platform to share knowledge,
            tutorials, and real-world development experiences.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/all-articles" className="hover:text-white transition">
                All Articles
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-white transition">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-white transition">
                Signup
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Categories
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">React</li>
            <li className="hover:text-white cursor-pointer">MERN Stack</li>
            <li className="hover:text-white cursor-pointer">Tailwind CSS</li>
            <li className="hover:text-white cursor-pointer">Interview Prep</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Subscribe
          </h3>
          <p className="text-sm text-gray-400 mb-3">
            Get latest articles directly in your inbox.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-3 py-2 rounded-l-lg bg-gray-800 text-sm focus:outline-none"
            />
            <button className="bg-indigo-600 px-4 py-2 rounded-r-lg text-white text-sm hover:bg-indigo-700">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 NotesEra. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Built with ❤️ by Rupali Bharti
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
