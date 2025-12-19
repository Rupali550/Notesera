import { useState } from "react";

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    content: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Blog submitted (frontend only)");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Create New Blog
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Write and publish your article on NotesEra
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Blog Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter blog title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Short Description
            </label>
            <input
              type="text"
              name="description"
              placeholder="Short summary of blog"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              <option value="">Select category</option>
              <option>React</option>
              <option>MERN Stack</option>
              <option>Tailwind CSS</option>
              <option>JavaScript</option>
              <option>Interview Prep</option>
            </select>
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Blog Content
            </label>
            <textarea
              name="content"
              rows="8"
              placeholder="Write your blog content here..."
              value={formData.content}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg resize-none focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Blog Cover Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full text-sm"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-end gap-4 pt-4">
            <button
              type="reset"
              className="px-6 py-2 border rounded-lg text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Publish Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
