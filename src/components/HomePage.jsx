import '../styles/HomePage.css';
import ThemeToggle from './ThemeToggle.jsx';

export default function HomePage({ setCurrentPage }) {
  return (
    <div className="page-container">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-layout">
            <div className="logo-section">
              <img 
                src="/cat-envelope.jpg" 
                alt="BudgetCat Logo" 
                className="logo-img"
              />
              <span className="brand-name">Cashvello</span>
            </div>
            
            <div className="nav-links">
              <a href="#" className="nav-link">Home</a>
              <a href="#" className="nav-link">About Us</a>
              <button 
                onClick={() => setCurrentPage('login')} 
                className="nav-link" 
                style={{border: 'none', background: 'none'}}
              >
                Login
              </button>
              <a href="#" className="nav-link">Sign Up</a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <div className="main-content">
        <button className="create-btn">
          Create Account
        </button>
        
        <p className="description">
          We are creating this cash envelope budgeting app to help you...
        </p>
      </div>
    </div>
  );
}