// ResetPassword.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ResetPassword.css';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (
      password.length < minLength ||
      !hasUppercase ||
      !hasLowercase ||
      !hasNumber ||
      !hasSpecialChar
    ) {
      setPasswordError(
        'Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.'
      );
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();

    // Validate new password
    if (!validatePassword(newPassword)) {
      return;
    }

    // Check if passwords match
    if (newPassword !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
      return;
    } else {
      setConfirmPasswordError('');
    }

    // Logic to reset password (e.g., call an API)
    console.log('Password has been reset to:', newPassword);
    alert('Your password has been reset successfully!');

    // Redirect to login page after successful password reset
    navigate('/');
  };

  return (
    <div className="reset-password-page">
      <div className="reset-password-container">
        <h2>Reset Password</h2>
        <p>Please enter a new password for your account.</p>
        <form onSubmit={handleResetPassword}>
          <div className="input-group">
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
                validatePassword(e.target.value); // Validate password on input change
              }}
              required
            />
            <span className="icon">🔒</span>
          </div>
          {passwordError && <p className="error-message">{passwordError}</p>}
          <div className="input-group">
            <input
              type="password"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span className="icon">🔒</span>
          </div>
          {confirmPasswordError && (
            <p className="error-message">{confirmPasswordError}</p>
          )}
          <button type="submit" className="reset-button">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
