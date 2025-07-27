import React from 'react';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <div className="home-container">
        <h1>🏠 React Home Page</h1>
        <div className="welcome-content">
          <p>Welcome to the React Micro-Frontend Home Page!</p>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>🚀 Fast Performance</h3>
              <p>Built with React 19 and optimized for speed</p>
            </div>
            <div className="feature-card">
              <h3>🔧 Modern Tools</h3>
              <p>Using latest TypeScript and Single-SPA integration</p>
            </div>
            <div className="feature-card">
              <h3>📱 Responsive Design</h3>
              <p>Works perfectly on all devices and screen sizes</p>
            </div>
          </div>
          <div className="navigation-info">
            <p>Navigate between pages using the links above, or visit:</p>
            <ul>
              <li><strong>/react/about</strong> - Learn more about this app</li>
              <li><strong>/react</strong> - Return to this home page</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
