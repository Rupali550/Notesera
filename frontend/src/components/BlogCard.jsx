import { Link } from 'react-router-dom'


const BlogCard = ({ blog }) => {
return (
<div className="blog-card">
<h3>{blog.title}</h3>
<p>{blog.desc}</p>
<p>❤️ {blog.likes} Likes</p>
<Link to={`/blog/${blog.id}`}>Read More</Link>
</div>
)
}


export default BlogCard