import '../styles/form.css'


const Signup = () => {
return (
<div className="auth-container">
<form className="auth-box">
<h2>Create Account</h2>


<div className="form-group">
<label>Name</label>
<input type="text" placeholder="Enter your name" />
</div>


<div className="form-group">
<label>Email</label>
<input type="email" placeholder="Enter your email" />
</div>


<div className="form-group">
<label>Password</label>
<input type="password" placeholder="Create password" />
</div>


<button className="auth-btn">Signup</button>


<p className="auth-text">
Already have an account? <span>Login</span>
</p>
</form>
</div>
)
}


export default Signup