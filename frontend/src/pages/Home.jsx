import BlogCard from '../components/BlogCard'
import { blogs } from '../data/blogs'


const Home = () => {
return (
<div className="container">
{blogs.map(blog => (
<BlogCard key={blog.id} blog={blog} />
))}
</div>
)
}


export default Home