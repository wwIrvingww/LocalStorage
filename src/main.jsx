// Import the necessary modules
import React from 'react'; // Import the React library
import ReactDOM from 'react-dom/client'; // Import the ReactDOM library for rendering React components
import App from './App.jsx'; // Import the main App component
import './index.css'; // Import the global CSS styles

// Use the `createRoot` function instead of `render` for better performance
const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root ReactDOM element using the `createRoot` function and passing the HTML element with the id 'root'

// Wrap the app in a `<React.Suspense>` component for better error handling
// and user experience when dealing with asynchronous components
root.render(
  <React.StrictMode> // Enable additional checks and warnings for the React tree
    <React.Suspense fallback={<div>Loading...</div>}> // Use the `<React.Suspense>` component to handle asynchronous rendering and display a fallback loading message
      <App /> // Render the main App component
    </React.Suspense>
  </React.StrictMode>,
);

