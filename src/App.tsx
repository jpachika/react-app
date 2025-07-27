import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
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
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;