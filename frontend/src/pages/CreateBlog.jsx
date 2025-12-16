import '../styles/createBlog.css'


const CreateBlog = () => {
return (
<div className="create-container">
<h2 className="create-title">Create New Blog</h2>


<form className="create-form">
<div className="form-group">
<label>Blog Title</label>
<input type="text" placeholder="Enter blog title" />
</div>


<div className="form-group">
<label>Short Description</label>
<input type="text" placeholder="Enter short description" />
</div>


<div className="form-group">
<label>Blog Content</label>
<textarea rows="8" placeholder="Write your blog content here..."></textarea>
</div>


<button className="publish-btn">Publish Blog</button>
</form>
</div>
)
}


export default CreateBlog