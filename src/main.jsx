import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Footer from './components/Footer';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <App />
      </div>
      <Footer />
    </div>
  </React.StrictMode>
);
