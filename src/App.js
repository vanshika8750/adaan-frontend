import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Home from './components/Home/Home';
import Navbar from './components/Navbar';
import './index.css';
import WhatsAppIcon from './components/Whatsapp/Whatsapp';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true); 
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false); 
  };

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/register"
            element={<Register isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      <WhatsAppIcon />
    </Router>
  );
}

export default App;
