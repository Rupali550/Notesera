import '../styles/dashboard.css'
import { blogs } from '../data/blogs'


const Dashboard = () => {
return (
<div className="dashboard-container">
<h2 className="dashboard-title">My Dashboard</h2>
<p className="dashboard-sub">Manage your blogs</p>


<div className="dashboard-grid">
{blogs.map(blog => (
<div key={blog.id} className="dashboard-card">
<h3>{blog.title}</h3>
<p>{blog.desc}</p>


<div className="dashboard-actions">
<button className="edit-btn">Edit</button>
<button className="delete-btn">Delete</button>
</div>
</div>
))}
</div>
</div>
)
}


export default Dashboard