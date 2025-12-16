import { useParams } from 'react-router-dom'
import { blogs } from '../data/blogs'
import LikeButton from '../components/LikeButton'
import CommentBox from '../components/CommentBox'


const BlogDetails = () => {
const { id } = useParams()
const blog = blogs.find(b => b.id === Number(id))


if (!blog) return <h2>Blog not found</h2>


return (
<div className="container">
<h1>{blog.title}</h1>
<p>{blog.content}</p>
<LikeButton initialLikes={blog.likes} />
<CommentBox comments={blog.comments} />
</div>
)
}


export default BlogDetails