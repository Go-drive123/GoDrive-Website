import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure you're using the correct import for React 18
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css'; // Import your styles

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
