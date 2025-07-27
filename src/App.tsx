import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import AboutPage from './pages/AboutPage';
import './App.css';

interface AppProps {
  // Single-spa props
  name?: string;
  singleSpa?: any;
  mountParcel?: any;
}

function App(props: AppProps) {
  console.log('React App rendering with props:', props);
  
  return (
    <Router basename="/react">
      <div className="App">
        <Navigation />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;