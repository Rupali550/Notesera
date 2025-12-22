import { Link } from "react-router-dom";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";

const articles = [
  {
    id: 1,
    title: "Learn React Step by Step",
    author: "Rupali Bharti",
    date: "Aug 12, 2025",
    imageUrl: blog1,
  },
  {
    id: 2,
    title: "Why MERN Stack is Popular",
    author: "NotesEra",
    date: "Aug 10, 2025",
    imageUrl: blog2,
  },
];

const AllArticles = () => {
  return (
    <div className="bg-white min-h-screen px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">
            All Articles
          </h1>
          <input
            type="text"
            placeholder="Search articles..."
            className="border rounded-lg px-4 py-2"
          />
        </div>

        {/* List View */}
        <div className="space-y-6">
          {articles.map((article) => (
            <Link
              to={`/blog/${article.id}`}
              key={article.id}
              className="flex gap-6 border-b pb-6 hover:bg-gray-50 transition"
            >
              <img
                src={article.imageUrl}
                className="w-36 h-24 object-cover rounded-lg"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {article.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {article.author} • {article.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllArticles;
