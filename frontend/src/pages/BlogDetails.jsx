import { useParams } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const BlogDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();

  const [likes, setLikes] = useState(12);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const addComment = () => {
    if (!comment.trim()) return;

    setComments([
      ...comments,
      { text: comment, author: user?.name || "Guest" },
    ]);
    setComment("");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        {/* Blog Header */}
        <h1 className="text-4xl font-bold text-gray-800">
          Blog Title #{id}
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          By Admin • August 2025
        </p>

        {/* Content */}
        <p className="mt-6 text-gray-700 leading-relaxed">
          This is full blog content. Here admin will write detailed article
          including code snippets, explanations, and examples.
        </p>

        {/* Like */}
        <div className="mt-6 flex items-center gap-4">
          <button
            onClick={() => setLikes(likes + 1)}
            className="text-red-500 hover:text-red-600"
          >
            ❤️ Like
          </button>
          <span className="text-sm text-gray-600">{likes} Likes</span>
        </div>

        {/* Comment Section */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">💬 Comments</h3>

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="flex-1 border rounded-lg px-4 py-2"
            />
            <button
              onClick={addComment}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
            >
              Post
            </button>
          </div>

          {/* Comments List */}
          <div className="mt-6 space-y-3">
            {comments.map((c, index) => (
              <div
                key={index}
                className="bg-gray-100 p-3 rounded-lg text-sm"
              >
                <strong>{c.author}:</strong> {c.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
