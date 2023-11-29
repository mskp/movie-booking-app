import React from 'react';
import ReactDOM from 'react-dom/client';
import './globals.css'; // Importing global styles
import App from './App'; // Importing the main App component
import { Toaster } from 'react-hot-toast'; // Importing the Toaster component for notifications

// Creating a root for ReactDOM to render the React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the app within a StrictMode wrapper for additional checks in development
root.render(
  <React.StrictMode>
    {/* Configuring the Toast notifications with custom options */}
    <Toaster toastOptions={{
      duration: 2000, // Set the duration for which the toasts are displayed
      style: { borderRadius: "10px", background: "#333", color: "#fff" } // Customize the style of the toasts
    }}
      position="top-center" // Set the position of the toasts on the screen
    />
    {/* Rendering the main App component */}
    <App />
  </React.StrictMode>
);
