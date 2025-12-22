import { useState } from "react";

const CommentBox = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Aman",
      text: "Very helpful article 🔥",
    },
  ]);

  const [form, setForm] = useState({ name: "", text: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.text) return;

    setComments([
      ...comments,
      {
        id: Date.now(),
        name: form.name,
        text: form.text,
      },
    ]);

    setForm({ name: "", text: "" });
  };

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-semibold mb-4">Comments</h3>

      {/* Comment List */}
      <div className="space-y-4 mb-6">
        {comments.map((c) => (
          <div
            key={c.id}
            className="bg-gray-100 p-4 rounded-lg"
          >
            <p className="font-medium">{c.name}</p>
            <p className="text-gray-600 text-sm mt-1">{c.text}</p>
          </div>
        ))}
      </div>

      {/* Add Comment */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="w-full border px-4 py-2 rounded-lg"
        />

        <textarea
          placeholder="Write a comment..."
          rows="3"
          value={form.text}
          onChange={(e) =>
            setForm({ ...form, text: e.target.value })
          }
          className="w-full border px-4 py-2 rounded-lg"
        />

        <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700">
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default CommentBox;
