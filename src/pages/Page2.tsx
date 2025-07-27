import React, { useState } from 'react';
import './Page2.css';

const Page2: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [counter, setCounter] = useState(0);

  return (
    <div className="page2">
      <div className="page2-container">
        <h1>📋 React Page 2</h1>
        <div className="page2-content">
          
          <div className="intro-section">
            <h2>🎯 Welcome to Page 2</h2>
            <p>
              This is the second sub-page of the React micro-frontend application. 
              This page demonstrates interactive components, state management, and 
              dynamic content within the micro-frontend architecture.
            </p>
          </div>

          <div className="interactive-section">
            <h2>🎮 Interactive Components</h2>
            
            <div className="tabs-container">
              <div className="tabs-header">
                <button 
                  className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('overview')}
                >
                  📊 Overview
                </button>
                <button 
                  className={`tab-button ${activeTab === 'features' ? 'active' : ''}`}
                  onClick={() => setActiveTab('features')}
                >
                  ⚡ Features
                </button>
                <button 
                  className={`tab-button ${activeTab === 'demo' ? 'active' : ''}`}
                  onClick={() => setActiveTab('demo')}
                >
                  🎯 Demo
                </button>
              </div>
              
              <div className="tabs-content">
                {activeTab === 'overview' && (
                  <div className="tab-panel">
                    <h3>📈 Overview Tab</h3>
                    <p>This tab shows how you can implement tabbed interfaces within your React micro-frontend.</p>
                    <div className="stats-grid">
                      <div className="stat-card">
                        <h4>🔢 Counter Value</h4>
                        <p className="stat-value">{counter}</p>
                      </div>
                      <div className="stat-card">
                        <h4>📍 Current Page</h4>
                        <p className="stat-value">/react/page2</p>
                      </div>
                      <div className="stat-card">
                        <h4>⚛️ Framework</h4>
                        <p className="stat-value">React 19</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'features' && (
                  <div className="tab-panel">
                    <h3>⚡ Features Tab</h3>
                    <p>Explore the advanced features available in this micro-frontend page.</p>
                    <div className="feature-list">
                      <div className="feature-row">
                        <span className="feature-icon">🔄</span>
                        <span className="feature-name">State Management</span>
                        <span className="feature-status">✅ Active</span>
                      </div>
                      <div className="feature-row">
                        <span className="feature-icon">🎨</span>
                        <span className="feature-name">Dynamic Styling</span>
                        <span className="feature-status">✅ Active</span>
                      </div>
                      <div className="feature-row">
                        <span className="feature-icon">📱</span>
                        <span className="feature-name">Responsive Design</span>
                        <span className="feature-status">✅ Active</span>
                      </div>
                      <div className="feature-row">
                        <span className="feature-icon">🔗</span>
                        <span className="feature-name">Router Integration</span>
                        <span className="feature-status">✅ Active</span>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'demo' && (
                  <div className="tab-panel">
                    <h3>🎯 Interactive Demo</h3>
                    <p>Try out these interactive elements to see state management in action.</p>
                    <div className="demo-controls">
                      <div className="counter-section">
                        <h4>🔢 Counter Demo</h4>
                        <div className="counter-display">
                          <span className="counter-value">{counter}</span>
                        </div>
                        <div className="counter-buttons">
                          <button onClick={() => setCounter(counter - 1)} className="counter-btn decrease">
                            ➖ Decrease
                          </button>
                          <button onClick={() => setCounter(0)} className="counter-btn reset">
                            🔄 Reset
                          </button>
                          <button onClick={() => setCounter(counter + 1)} className="counter-btn increase">
                            ➕ Increase
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="navigation-section">
            <h2>🗺️ Page Navigation</h2>
            <div className="nav-cards">
              <div className="nav-card">
                <h4>🏠 React Home</h4>
                <p>Return to the main React application page</p>
                <code>/react</code>
              </div>
              <div className="nav-card">
                <h4>📄 Page 1</h4>
                <p>Visit the first sub-page with feature showcase</p>
                <code>/react/page1</code>
              </div>
              <div className="nav-card current">
                <h4>📋 Page 2 (Current)</h4>
                <p>You are currently viewing this interactive page</p>
                <code>/react/page2</code>
              </div>
              <div className="nav-card">
                <h4>ℹ️ About</h4>
                <p>Learn more about the React micro-frontend</p>
                <code>/react/about</code>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Page2;
