import { Link, useNavigate } from 'react-router-dom';
import loginBg from '../assets/login_bg.png';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate authentication
    setTimeout(() => {
      navigate('/dashboard');
    }, 500);
  };
  return (
    <main className="auth-wrapper fade-in">
      <div className="auth-container glass-panel">
        
        <div className="auth-image-side">
          <img src={loginBg} alt="Login Illustration" />
        </div>

        <div className="auth-form-side">
          <h2>Welcome Back</h2>
          <p>Please enter your details to sign in.</p>
          
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="••••••••" required />
            </div>
            <div className="auth-options">
              <label className="checkbox-container">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>
            <button type="submit" className="btn-primary" style={{width: '100%', marginTop: '1rem'}}>Sign In</button>
          </form>
          
          <p className="auth-redirect">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
        
      </div>
    </main>
  );
};

export default Login;
