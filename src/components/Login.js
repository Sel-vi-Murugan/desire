import React, { useState } from 'react';
import logo from '../assets/logo3.png';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';
import photo from '../assets/login.png';
import { useAuth } from '../contexts/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate=useNavigate();
  const { login } = useAuth(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { email, password };
    try {
      const response = await fetch('http://localhost:8080/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        setError('');
        const data=await response.json();
        login(data);

        if(email ==='selvi.admin@desire.com'){
        navigate('/admin');
        }
        else {
          navigate('/user');
        }
       // alert('Login successful!');
      } else {
        setError('Login failed! Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred during login. Please try again later.');
    }
  };


  return (
    <div className="login-container">
      <div className="login-left">
        <img src={photo} alt="Login Illustration" className="login-image" />
      </div>
      <div className="login-right">
        <div className="login-header">
          <img src={logo} alt="Logo" className="login-logo" />
          <h2>Welcome Back!</h2>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
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
          {error && <p className="error-message">{error}</p>} 
          <button type="submit" className="login-button">Log In</button>
        </form>
        <p className="login-footer">
          Don't have an account? 
          <a href='/Signup'><span className="signup-link">Sign up here</span></a>
        </p>
      </div>
    </div>
  );
}

export default Login;
