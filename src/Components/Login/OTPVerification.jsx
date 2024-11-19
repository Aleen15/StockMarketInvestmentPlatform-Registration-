// OTPVerification.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OTPVerification.css';

const OTPVerification = () => {
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const navigate = useNavigate(); // For redirecting after OTP verification

  const validateOTP = (otp) => {
    const otpPattern = /^[0-9]{6}$/; // OTP must be exactly 6 digits
    if (!otpPattern.test(otp)) {
      setOtpError('OTP must be a 6-digit number.');
      return false;
    } else {
      setOtpError('');
      return true;
    }
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();

    if (validateOTP(otp)) {
      // Replace '123456' with the OTP expected from the backend for this example
      if (otp === '123456') { 
        console.log('OTP Verified:', otp);
        alert('OTP Verified! You can now reset your password.');

        // Redirect to the reset password page
        navigate('/reset-password'); // Adjust route as needed
      } else {
        setOtpError('Invalid OTP. Please try again.');
      }
    } else {
      alert('Please enter a valid OTP.');
    }
  };

  return (
    <div className="otp-verification-page">
      <div className="otp-verification-container">
        <h2>OTP Verification</h2>
        <p>Enter the OTP sent to your email to verify your account.</p>
        <form onSubmit={handleVerifyOTP}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => {
                setOtp(e.target.value);
                validateOTP(e.target.value); // Real-time validation
              }}
              required
            />
            <span className="icon">🔑</span>
          </div>
          {otpError && <p className="error-message">{otpError}</p>}
          <button type="submit" className="verify-button">Verify OTP</button>
        </form>
      </div>
    </div>
  );
};

export default OTPVerification;
