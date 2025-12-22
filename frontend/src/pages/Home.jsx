import { Link } from "react-router-dom";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";

const featuredBlogs = [
  {
    id: 1,
    title: "Learn React Step by Step",
    desc: "Master React with hands-on projects and industry patterns.",
    imageUrl: blog1,
  },
  {
    id: 2,
    title: "Why MERN Stack is Popular",
    desc: "Explore why the MERN stack is widely adopted by companies.",
    imageUrl: blog2,
  },
];

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold">
            Learn. Build. Grow with NotesEra
          </h1>
          <p className="mt-5 text-lg opacity-90">
            Articles, projects & guides for modern developers
          </p>
          <Link
            to="/all-articles"
            className="inline-block mt-8 bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold"
          >
            Explore Articles →
          </Link>
        </div>
      </section>

      {/* Featured */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          ⭐ Featured Articles
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {featuredBlogs.map((blog) => (
            <Link
              to={`/blog/${blog.id}`}
              key={blog.id}
              className="group bg-white rounded-2xl shadow hover:shadow-2xl transition overflow-hidden"
            >
              <img
                src={blog.imageUrl}
                className="h-64 w-full object-cover group-hover:scale-105 transition"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold group-hover:text-indigo-600">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mt-2">{blog.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
