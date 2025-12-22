import { Link } from "react-router-dom";


import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";


const blogs = [
  {
    id: 1,
    title: "Learn React Step by Step",
    desc: "Master React with hands-on projects and industry patterns.",
    author: "Rupali Bharti",
    date: "August 12, 2025",
    imageUrl: blog1,
  },
  {
    id: 2,
    title: "Why MERN Stack is Popular",
    desc: "Explore why the MERN stack is widely adopted by companies.",
    author: "NotesEra",
    date: "August 10, 2025",
    imageUrl: blog2,
  },
  {
    id: 3,
    title: "Tailwind vs CSS — What to Use?",
    desc: "Compare Tailwind and traditional CSS for web projects.",
    author: "Admin",
    date: "August 8, 2025",
    imageUrl: blog1,
  },
];

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-white py-20 shadow-sm">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-5xl font-extrabold text-gray-800">
            NotesEra Blog
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-snug">
            Discover articles on web development, design, and building real apps.
          </p>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 hover:text-indigo-600 transition">
                {blog.title}
              </h2>
              <p className="text-gray-600 mt-2 text-sm">
                {blog.desc}
              </p>

              <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
                <span>✍ {blog.author}</span>
                <span>{blog.date}</span>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <button className="text-red-500 text-sm hover:text-red-600">
                  ❤️ Like
                </button>
                <Link
                  to={`/blog/${blog.id}`}
                  className="text-sm text-white bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;

/*


import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user } = useAuth();   // ✅ ONLY HERE

  return (
    <div>
      <h1>Home Page</h1>
      <p>Role: {user.role}</p>
    </div>
  );
};

export default Home;
*/