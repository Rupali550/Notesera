import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "Learn React Step by Step",
    desc: "A complete beginner-to-advanced guide for learning React.",
    author: "Rupali Bharti",
    date: "Aug 12, 2025",
    tag: "React",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    id: 2,
    title: "Why MERN Stack is Popular",
    desc: "Understand why MERN stack is widely used in startups.",
    author: "NotesEra",
    date: "Aug 10, 2025",
    tag: "MERN",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    id: 3,
    title: "Tailwind vs CSS",
    desc: "Which one should you choose for modern web apps?",
    author: "Admin",
    date: "Aug 08, 2025",
    tag: "CSS",
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f",
  },
];

const AllArticles = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* HERO */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-5xl font-extrabold text-gray-800">
            All Articles
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            Browse all articles related to web development, design, and tech.
          </p>

          <p className="mt-6 text-sm text-gray-500">
            {articles.length} Articles Published
          </p>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <img
                src={article.image}
                alt={article.title}
                className="h-52 w-full object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <span className="inline-block mb-3 text-xs font-semibold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
                  {article.tag}
                </span>

                <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-indigo-600 transition">
                  {article.title}
                </h2>

                <p className="text-sm text-gray-600 mb-4">
                  {article.desc}
                </p>

                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>✍ {article.author}</span>
                  <span>{article.date}</span>
                </div>

                <Link
                  to={`/blog/${article.id}`}
                  className="inline-block mt-5 text-sm font-medium text-indigo-600 hover:underline"
                >
                  Read Article →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllArticles;
