import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
          <li className="dropdown">
            <button 
              className={`dropdown-toggle ${location.pathname.includes('/react/page') ? 'active' : ''}`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              📄 Pages 
              <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link 
                    to="/react/page1" 
                    className={location.pathname === '/react/page1' ? 'active' : ''}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    📄 Page 1
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/react/page2" 
                    className={location.pathname === '/react/page2' ? 'active' : ''}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    📋 Page 2
                  </Link>
                </li>
              </ul>
            )}
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
