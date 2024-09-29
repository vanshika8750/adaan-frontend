import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser, sendOtp, verifyOtp } from '../api'; 
import './Register.css';
import loginImage from '../assets/login.avif';

const Register = ({ isAuthenticated, setIsAuthenticated }) => {
  const [user, setUser] = useState({
    phone: '',
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  });
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    if (user.password !== user.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await sendOtp({ email: user.email, phone: user.phone, name: user.name });
      setOtpSent(true); 
      setError(''); 
    } catch (err) {
      setError('Error sending OTP');
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const isVerified = await verifyOtp({ email: user.email, otp }); 
      if (isVerified) {
        const data = await registerUser(user);
        alert('Registration successful');
        navigate('/');
      } else {
        setError('Invalid OTP');
      }
    } catch (err) {
      setError('Error verifying OTP');
    }
  };

  return (
    <div className="wrapper">
      <div className="register-container">
        <div className="login-image">
          <img src={loginImage} alt="Register" />
        </div>
        <div className="login-form">
          {isAuthenticated ? (
            <>
              <h2>You are already logged in!</h2>
              <p>
                <Link to="/dashboard">Go to Dashboard</Link>
              </p>
            </>
          ) : (
            <>
              <h2>Register</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Phone"
                  value={user.phone}
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="Name"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                  required
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={user.confirmPassword}
                  onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
                  required
                />
                {!otpSent ? (
                  <button type="button" onClick={handleSendOtp}>
                    Send OTP
                  </button>
                ) : (
                  <>
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      required
                    />
                    <button type="button" onClick={handleVerifyOtp}>
                      Verify OTP
                    </button>
                  </>
                )}
                {error && <p className="error">{error}</p>}
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
