// OTPVerification.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OTPVerification.css';
import land from '../Assets/land.jpg';


const OTPVerification = () => {
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [isVerifying, setIsVerifying] = useState(false); // State for loading
  const [isVerified, setIsVerified] = useState(false); // State for verified status
  const navigate = useNavigate();

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
      setIsVerifying(true); // Start loading
      setTimeout(() => {
        if (otp === '123456') { // Replace '123456' with the expected OTP for this example
          setIsVerifying(false);
          setIsVerified(true); // Mark as verified
          setTimeout(() => {
            navigate('/reset-password'); // Redirect to ResetPassword.jsx
          }, 1500); // Delay for showing the "Verified" message
        } else {
          setIsVerifying(false);
          setOtpError('Invalid OTP. Please try again.');
        }
      }, 2000); // Simulate 2 seconds of verification
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
              disabled={isVerifying || isVerified} // Disable input if verifying or verified
            />
            <span className="icon">🔑</span>
          </div>
          {otpError && <p className="error-message">{otpError}</p>}
          <button
            type="submit"
            className="verify-button"
            disabled={isVerifying || isVerified} // Disable button if verifying or verified
          >
            {isVerifying ? 'Verifying...' : 'Verify OTP'}
          </button>
          {isVerified && <p className="verified-message">OTP Verified Successfully!</p>}
        </form>
      </div>
      <div>
      <img
          src={land}
          alt="Device mockups"
          className="mockups-img"
        />
      </div>
    </div>
  );
};

export default OTPVerification;
