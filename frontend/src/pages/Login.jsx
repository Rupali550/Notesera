import '../styles/form.css'


const Login = () => {
return (
<div className="auth-container">
<form className="auth-box">
<h2>Login to NotesEra</h2>


<div className="form-group">
<label>Email</label>
<input type="email" placeholder="Enter your email" />
</div>


<div className="form-group">
<label>Password</label>
<input type="password" placeholder="Enter password" />
</div>


<button className="auth-btn">Login</button>


<p className="auth-text">
Don’t have an account? <span>Signup</span>
</p>
</form>
</div>
)
}


export default Login