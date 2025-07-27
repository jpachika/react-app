import React from 'react';
import './Page1.css';

const Page1: React.FC = () => {
  return (
    <div className="page1">
      <div className="page1-container">
        <h1>📄 React Page 1</h1>
        <div className="page1-content">
          <div className="intro-section">
            <h2>🎯 Welcome to Page 1</h2>
            <p>
              This is the first sub-page of the React micro-frontend application. 
              It demonstrates how you can create multiple pages within a single 
              micro-frontend and navigate between them seamlessly.
            </p>
          </div>

          <div className="features-showcase">
            <h2>🚀 Page 1 Features</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">📊</div>
                <h3>Data Visualization</h3>
                <p>Perfect for displaying charts, graphs, and analytical data</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎨</div>
                <h3>Custom Styling</h3>
                <p>Unique design patterns and visual elements</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🔄</div>
                <h3>Dynamic Content</h3>
                <p>Interactive components and real-time updates</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">💾</div>
                <h3>Data Management</h3>
                <p>State management and data persistence</p>
              </div>
            </div>
          </div>

          <div className="navigation-tips">
            <h2>🗺️ Navigation Guide</h2>
            <div className="nav-tip-cards">
              <div className="nav-tip-card">
                <h4>📍 Current Location</h4>
                <p>You are on <code>/react/page1</code></p>
              </div>
              <div className="nav-tip-card">
                <h4>🔗 Quick Links</h4>
                <p>Navigate to other pages using the navigation bar above</p>
              </div>
              <div className="nav-tip-card">
                <h4>↩️ Go Back</h4>
                <p>Use the React Home link to return to the main React page</p>
              </div>
            </div>
          </div>

          <div className="demo-content">
            <h2>🎮 Interactive Demo</h2>
            <div className="demo-area">
              <p>This area could contain:</p>
              <ul>
                <li>Interactive forms and inputs</li>
                <li>Live data feeds</li>
                <li>Real-time charts and graphs</li>
                <li>User-generated content</li>
                <li>API integrations</li>
              </ul>
              <div className="demo-box">
                <h4>Sample Component Area</h4>
                <p>This is where your custom components would go!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
