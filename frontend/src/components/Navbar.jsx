import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileToggle = () => {
    alert('Mobile menu clicked! In a full app, this would open a side drawer.');
  };

  return (
    <header className="navbar" id="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          <i className='bx bx-link'></i> Pay<span>Chain</span>
        </Link>
        <nav className="nav-menu">
          <ul>
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''}>About</Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''}>Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center' }}>
          <button onClick={toggleTheme} style={{ background: 'transparent', border: 'none', fontSize: '1.25rem', color: 'var(--text-main)', cursor: 'pointer', marginRight: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className={`bx ${theme === 'light' ? 'bx-moon' : 'bx-sun'}`}></i>
          </button>
          {localStorage.getItem('token') ? (
            <Link to="/dashboard" className="btn-primary">Dashboard</Link>
          ) : (
            <>
              <Link to="/login" className="btn-text">Log In</Link>
              <Link to="/login" className="btn-primary">Get Started</Link>
            </>
          )}
        </div>
        <div className="mobile-toggle" id="mobile-toggle" onClick={handleMobileToggle}>
          <i className='bx bx-menu'></i>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
