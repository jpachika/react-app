import React from 'react';
import './AboutPage.css';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>ℹ️ About React App</h1>
        <div className="about-content">
          <div className="intro-section">
            <h2>🎯 Project Overview</h2>
            <p>
              This React application is part of a sophisticated micro-frontend architecture 
              built with Single-SPA. It demonstrates how modern React applications can be 
              seamlessly integrated into a larger ecosystem of micro-frontends.
            </p>
          </div>

          <div className="tech-stack">
            <h2>🛠️ Technology Stack</h2>
            <div className="tech-grid">
              <div className="tech-item">
                <h3>⚛️ React 19</h3>
                <p>Latest React with concurrent features and improved performance</p>
              </div>
              <div className="tech-item">
                <h3>📘 TypeScript</h3>
                <p>Type-safe development with enhanced developer experience</p>
              </div>
              <div className="tech-item">
                <h3>🌐 Single-SPA</h3>
                <p>Micro-frontend framework for seamless application integration</p>
              </div>
              <div className="tech-item">
                <h3>🗺️ React Router</h3>
                <p>Client-side routing that works within the micro-frontend context</p>
              </div>
            </div>
          </div>

          <div className="features-section">
            <h2>✨ Key Features</h2>
            <ul className="features-list">
              <li>🔄 <strong>Hot Module Replacement</strong> - Instant development feedback</li>
              <li>📱 <strong>Responsive Design</strong> - Works on all device sizes</li>
              <li>🎨 <strong>Modern UI</strong> - Clean and intuitive user interface</li>
              <li>🚀 <strong>Performance Optimized</strong> - Fast loading and rendering</li>
              <li>🔒 <strong>Type Safe</strong> - Full TypeScript integration</li>
              <li>🧩 <strong>Modular Architecture</strong> - Easy to extend and maintain</li>
            </ul>
          </div>

          <div className="architecture-section">
            <h2>🏗️ Micro-Frontend Architecture</h2>
            <p>
              This React app is designed to work independently while also integrating 
              seamlessly with other micro-frontends. It can be:
            </p>
            <div className="architecture-points">
              <div className="point">
                <h4>🎯 Independently Developed</h4>
                <p>Teams can work on this app without affecting others</p>
              </div>
              <div className="point">
                <h4>🚀 Separately Deployed</h4>
                <p>Deploy updates without touching other applications</p>
              </div>
              <div className="point">
                <h4>🔗 Runtime Integrated</h4>
                <p>Loads dynamically as part of the larger application</p>
              </div>
            </div>
          </div>

          <div className="routing-info">
            <h2>🗺️ Routing Information</h2>
            <p>This app supports client-side routing with the following structure:</p>
            <div className="route-list">
              <div className="route-item">
                <code>/react</code>
                <span>Home page with feature overview</span>
              </div>
              <div className="route-item">
                <code>/react/about</code>
                <span>This about page with technical details</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
