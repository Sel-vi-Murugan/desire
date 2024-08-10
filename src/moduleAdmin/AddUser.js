import React, { useState } from 'react';
import logo from '../assets/logo3.png';
import '../styles/AddUser.css';
import { useNavigate } from 'react-router-dom';

function AddUser() {
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
            alert('User added successfully!');
            navigate('/user-list'); 
        } else {
            const errorData = await response.json();
            alert(`Failed to add user: ${errorData.message || 'Unknown error'}`);
        }
    } catch (error) {
        console.error('Error during adding user:', error);
        alert('An error occurred while adding the user.');
    }
};


  return (
    <div className="adduser-container">
      <div className="adduser-header">
        <img src={logo} alt="Logo" className="adduser-logo" />
        <h2>Add New User</h2>
      </div>
      <div className="adduser-form-container">
        <form className="adduser-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
                        type="text"
                        id="customerName"
                        name="customerName"
                        placeholder="Enter customer name"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        required
                    />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter User Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="adduser-button">Add User</button>
          <button 
            type="button" 
            onClick={() => navigate('/user-list')} 
            className="back-button"
          >
            Back to User List
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
