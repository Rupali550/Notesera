import { Link } from "react-router-dom";
import blog1 from "../assets/blog1.jpg";

const myBlogs = [
  {
    id: 1,
    title: "Learn React Step by Step",
    date: "Aug 12, 2025",
    image: blog1,
    status: "Published",
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <Link
            to="/create-blog"
            className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700"
          >
            + New Blog
          </Link>
        </div>

        {/* Blogs Table */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-100 text-sm text-gray-600">
              <tr>
                <th className="p-4">Blog</th>
                <th>Status</th>
                <th>Date</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {myBlogs.map((blog) => (
                <tr key={blog.id} className="border-t">
                  <td className="p-4 flex items-center gap-4">
                    <img
                      src={blog.image}
                      className="w-16 h-12 object-cover rounded"
                    />
                    <span className="font-medium">{blog.title}</span>
                  </td>

                  <td>
                    <span className="text-green-600 text-sm font-semibold">
                      {blog.status}
                    </span>
                  </td>

                  <td className="text-sm text-gray-500">{blog.date}</td>

                  <td className="text-center space-x-3">
                    <button className="text-indigo-600 hover:underline">
                      Edit
                    </button>
                    <button className="text-red-500 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
