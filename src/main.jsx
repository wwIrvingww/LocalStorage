import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Use the `createRoot` function instead of `render` for better performance
const root = ReactDOM.createRoot(document.getElementById('root'))

// Wrap the app in a `<React.Suspense>` component for better error handling
// and user experience when dealing with asynchronous components
root.render(
  <React.StrictMode>
    <React.Suspense fallback={<div>Loading...</div>}>
      <App />
    </React.Suspense>
  </React.StrictMode>,
)
