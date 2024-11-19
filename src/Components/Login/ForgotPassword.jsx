// ForgotPassword.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false); // State to track if email is verified
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(emailValue));
    setIsEmailVerified(false); // Reset verification status if email changes
  };

  const handleVerifyEmail = () => {
    // Simulate email verification process
    if (isEmailValid) {
      alert('Email verified successfully!');
      setIsEmailVerified(true); // Set email as verified
    } else {
      alert('Please enter a valid email.');
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log('Sending OTP to:', email);
    alert('An OTP has been sent to your email address.');
    navigate('/otp-verification');
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <h2>Forgot Password</h2>
        <p>Enter your email to verify it, then receive an OTP.</p>
        <form onSubmit={handleForgotPassword}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <span className="icon">📧</span>
          </div>
          <div className="btn">
          <button
            type="button"
            className="verify-button"
            onClick={handleVerifyEmail}
            disabled={!isEmailValid}
          >
            Verify Email
          </button>
          "Send OTP" button get Enable only if email is verified
          
          <button
            type="submit"
            className="sent-button"
            disabled={!isEmailVerified}
          >
            Send OTP
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
