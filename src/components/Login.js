import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api';
import './Login.css';
import loginImage from '../assets/login.avif';
import { Link } from 'react-router-dom';

const Login = ({ isAuthenticated, setIsAuthenticated }) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser({ phone, password });
      localStorage.setItem('token', data.token); 
      setIsAuthenticated(true); 
      navigate('/dashboard'); 
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="wrapper">
      <div className="login-container">
        <div className="login-image">
          <img src={loginImage} alt="Login" />
        </div>
        <div className="login-form">
          {isAuthenticated ? (
            <>
              <h2>You are already logged in!</h2>
              <Link to="/dashboard">Go to Dashboard</Link>
            </>
          ) : (
            <>
              <h2>Login</h2>
              <form onSubmit={handleLogin}>
                <input
                  type="text"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="submit">Login</button>
                {error && <p className="error">{error}</p>}
              </form>
              <div className="signup-link">
                <p>
                  Don't have an account? <Link to="/register">Sign up</Link>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
