// ForgotPassword.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';
import land from '../Assets/land.jpg';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false); // State to track loading state
  const [isVerified, setIsVerified] = useState(false); // State to show "Verified" message
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(emailValue));
    setIsVerified(false); // Reset verification status if email changes
  };

  const handleVerifyEmail = () => {
    if (isEmailValid) {
      setIsVerifying(true); // Start the loading process
      setTimeout(() => {
        setIsVerifying(false);
        setIsVerified(true); // Show "Verified" message
        setTimeout(() => {
          navigate('/otp-verification'); // Redirect to OTP verification page after a delay
        }, 1500); // Delay before redirecting
      }, 2000); // Simulate a delay of 2 seconds for verification
    }
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <h2 className='f'>Forgot Password</h2>
        <p className='p'>Enter your email to verify it and proceed to reset your password.</p>
        <form>
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
              disabled={!isEmailValid || isVerifying}
            >
              {isVerifying ? 'Verifying...' : 'Verify Email'}
            </button>
          </div>
          {isVerified && (
            <p className="verified-message">Email has been verified successfully!</p>
          )}
        </form>
      </div>
      <div className="mockups">
        <img
          src={land}
          alt="Device mockups"
          className="mockups-img"
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
