import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const CreateBlog = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    content: "",
    image: "",
  });

  // 🔒 Admin protection
  if (user?.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold text-red-500">
        Access Denied 🚫
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Blog Data:", formData);

    alert("Blog Created Successfully ✅");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          ✍ Create New Blog
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="title"
            placeholder="Blog Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500"
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL / public path"
            value={formData.image}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          />

          <textarea
            name="desc"
            placeholder="Short Description"
            rows="3"
            value={formData.desc}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
            required
          />

          <textarea
            name="content"
            placeholder="Full Blog Content..."
            rows="8"
            value={formData.content}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
            required
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
          >
            Publish Blog 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
