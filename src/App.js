// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../src/Components/Login/Login';
import Register from '../src/Components/Login/Register';
import Portfolio from './Components/PortMgmt/Portfolio';
import ForgotPassword from './Components/Login/ForgotPassword';
import OTPVerification from './Components/Login/OTPVerification';
import ResetPassword from './Components/Login/ResetPassword';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp-verification" element={<OTPVerification />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        
      </Routes>
    </Router>
  );
};

export default App;
