import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import adaanlogo from '../assets/adan.svg';

const Navbar = ({ isAuthenticated, onLogout }) => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false); 
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleConfirmLogout = () => {
    setShowLogoutModal(false); 
    onLogout(); 
    navigate('/');
  };

  const handleCancelLogout = () => {
    setShowLogoutModal(false); 
  };

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMobile(false);
    }
  };

  return (
    <nav className="navbar">
      <div>
        <img className="navbar-logo" src={adaanlogo} alt="adaaanlogo" />
      </div>
      
      <ul className={`navbar-links ${isMobile ? 'mobile' : ''}`}>
        <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
        {isAuthenticated ? (
          <>
            <li><Link to="/dashboard" onClick={closeMobileMenu}>Dashboard</Link></li>
            <li onClick={handleLogoutClick} style={{ cursor: 'pointer' }}>Logout</li>
          </>
        ) : (
          <li><Link to="/login" onClick={closeMobileMenu}>Login</Link></li>
        )}
      </ul>

      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>

      {showLogoutModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Confirm Logout</h3>
            <p>Are you sure you want to log out?</p>
            <div className="modal-buttons">
              <button className="confirm-btn" onClick={handleConfirmLogout}>Yes, Logout</button>
              <button className="cancel-btn" onClick={handleCancelLogout}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
