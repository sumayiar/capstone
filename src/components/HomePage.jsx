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
                alt="Cashvelo logo" 
                className="logo-img"
              />
              <span className="project-name">Cashvelo</span>
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
          What is Cashvelo? Cashvelo is your modern budgeting app with the goal of
          helping you become better with your money. Unlike with other online budgeting apps they just have 
          your standard ways of budegting. But with Cashvelo we use the Cash envelope system. The Cash enevelope
          system is a popular budeting method for visualizaing and maintaining a flexible budget. 
        </p>
      </div>
    </div>
  );
}