import { Link, useNavigate } from 'react-router-dom';
import registerBg from '../assets/register_bg.png';

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate registration
    setTimeout(() => {
      navigate('/dashboard');
    }, 500);
  };
  return (
    <main className="auth-wrapper fade-in">
      <div className="auth-container glass-panel">
        
        <div className="auth-form-side">
          <h2>Create Account</h2>
          <p>Join PayChain and unlock borderless payments.</p>
          
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Create a strong password" required />
            </div>
            <button type="submit" className="btn-primary" style={{width: '100%', marginTop: '1rem'}}>Sign Up</button>
          </form>
          
          <p className="auth-redirect">
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
        
        <div className="auth-image-side">
          <img src={registerBg} alt="Register Illustration" />
        </div>

      </div>
    </main>
  );
};

export default Register;
