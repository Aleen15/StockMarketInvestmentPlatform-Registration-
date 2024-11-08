// Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength || !hasUppercase || !hasLowercase || !hasNumber || !hasSpecialChar) {
      setPasswordError(
        'Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.'
      );
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validatePassword(password)) {
      // Mock login validation: in a real app, check with an API here
      if (email === "test@example.com" && password === "Test@1234") {
        // Navigate to Portfolio page upon successful login
        navigate('/portfolio');
      } else {
        alert('Invalid email or password.');
      }
    } else {
      alert('Please fix the errors before submitting.');
    }
  };

  return (
    
    <div className="login-page">
      <div className="login-container">
        <h2>SafeCryptoStocks</h2>
        <h3>Sign In</h3>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className="icon">📧</span>
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value); // Validate password on each change
              }}
              required
            />
            <span className="icon">🔒</span>
          </div>
          {passwordError && <p className="error-message">{passwordError}</p>}
          <button type="submit" className="login-button">Login</button>
          <p>
            Don’t have an account? <Link to="/register" className="register-link">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
