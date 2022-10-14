import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex-1">
          <App />
        </div>
      </div>
    </Router>
  </React.StrictMode>
);
