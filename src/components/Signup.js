import React, { useState } from 'react';
import logo from '../assets/logo3.png';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';
import photo from '../assets/login.png';


function Signup() {
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const user = { customerName, email, password };

    try {
      const response = await fetch('http://localhost:8080/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        alert('Signup successful!');
        navigate('/');
      } else {
        alert('Signup failed!');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src= {photo} alt="Signup Illustration" className="login-image" />
      </div>
      <div className="login-right">
        <div className="login-header">
          <img src={logo} alt="Logo" className="login-logo" />
          <h2>Create Your Account</h2>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="customerName"
              placeholder="Enter your name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)} 
              required />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required />
          </div>
          <div className="form-group">
            <input 
              type="password" 
              id="confirm-password" 
              name="confirmPassword" 
              placeholder="Confirm your password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required />
          </div>
          <button type="submit" className="login-button">Sign Up</button>
        </form>
        <p className="login-footer">
          Already have an account? 
          <a href='/Login'><span className="login-link">Log in here</span></a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
