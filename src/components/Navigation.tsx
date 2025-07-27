import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="react-navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <span className="nav-icon">⚛️</span>
          <span className="nav-title">React App</span>
        </div>
        <ul className="nav-links">
          <li>
            <Link 
              to="/react" 
              className={location.pathname === '/react' ? 'active' : ''}
            >
              🏠 Home
            </Link>
          </li>
          <li>
            <Link 
              to="/react/about" 
              className={location.pathname === '/react/about' ? 'active' : ''}
            >
              ℹ️ About
            </Link>
          </li>
        </ul>
        <div className="nav-info">
          <span className="current-route">Current: {location.pathname}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
