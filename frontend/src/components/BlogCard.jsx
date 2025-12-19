import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      
      {/* BLOG IMAGE */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />

      {/* CONTENT */}
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800">
          {blog.title}
        </h2>

        <p className="text-sm text-gray-600 mt-2 line-clamp-3">
          {blog.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xs text-gray-500">
            {blog.author}
          </span>

          <Link
            to={`/blog/${blog.id}`}
            className="text-indigo-600 text-sm font-medium"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
