// Register.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Register.css';
import land from '../Assets/land.jpg';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    profilePictureUrl: '',
  });

  const [errors, setErrors] = useState({
    password: '',
    phone: '',
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (name === 'password') validatePassword(value);
    if (name === 'phone') validatePhone(value);
  };

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength || !hasUppercase || !hasLowercase || !hasNumber || !hasSpecialChar) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.',
      }));
      return false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
      return true;
    }
  };

  const validatePhone = (phone) => {
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: 'Phone number must be exactly 10 digits.',
      }));
      return false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, phone: '' }));
      return true;
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const isPasswordValid = validatePassword(formData.password);
    const isPhoneValid = validatePhone(formData.phone);

    if (isPasswordValid && isPhoneValid) {
      // Here, you would typically send the data to your backend API for registration
      console.log('Form submitted:', formData);

      // Navigate to Portfolio page after successful registration
      navigate('/portfolio');
    } else {
      alert('Please fix the errors before submitting.');
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h2>SafeCryptoStocks</h2>
        <h3>Sign Up</h3>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <span className="icon">📧</span>
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span className="icon">🔒</span>
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>
          <div className="input-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <span className="icon">👤</span>
          </div>
          <div className="input-group">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <span className="icon">👤</span>
          </div>
          <div className="input-group">
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <span className="icon">🏠</span>
          </div>
          <div className="input-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <span className="icon">📞</span>
            {errors.phone && <p className="error-message">{errors.phone}</p>}
          </div>
          <div className="input-group">
            <input
              type="url"
              name="profilePictureUrl"
              placeholder="Profile Picture URL"
              value={formData.profilePictureUrl}
              onChange={handleChange}
              required
            />
            <span className="icon">🌐</span>
          </div>
          <button type="submit" className="register-button">Register</button>
          <p>
            Already have an account? <Link to="/" className="login-link">Login</Link>
          </p>
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

export default Register;
