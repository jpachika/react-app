import React from "react";
import ReactDOM from "react-dom/client";
import singleSpaReact from "single-spa-react";
import App from "./App";
import "./index.css";

// Check if we're running in single-spa context
const isInSingleSpa = Boolean(
  (window as any).singleSpaNavigate || 
  (window as any).__SINGLE_SPA__
);

if (!isInSingleSpa) {
  // Standalone mode - render normally
  const container = document.getElementById('root');
  if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}

// Single-spa lifecycle methods
const lifecycles = singleSpaReact({
  React,
  ReactDOMClient: ReactDOM,
  rootComponent: App,
  domElementGetter: () => {
    const el = document.getElementById('single-spa-application:react-app') || document.getElementById('root');
    if (!el) {
      throw new Error("Root element for React app not found.");
    }
    console.log('React mounting to element:', el);
    console.log('Element current content:', el.innerHTML);
    return el;
  },
  renderType: 'createRoot',
  errorBoundary(err, info, props) {
    console.error('React error boundary triggered:', err, info);
    return React.createElement('div', {}, `An error occurred: ${err.message}`);
  },
});

export const { bootstrap, mount, unmount } = lifecycles;