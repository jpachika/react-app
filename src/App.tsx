import React from 'react';
import logo from './logo.svg';
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
    <div className="App">
      <header className="App-header">
        <h1>React Microfrontend</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          This is a React microfrontend running in single-spa!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;