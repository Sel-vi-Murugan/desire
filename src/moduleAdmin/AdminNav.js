import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logohc.png';
import { AuthProvider, useAuth } from '../contexts/AuthContext';
import '../styles/Navbar.css';

const  AdminNav = () => {

  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth(AuthProvider);
  const [isDropdownOpen, setDropdownOpen] = useState(false);


  const handleLoginClick = (e) => {
    e.preventDefault(); 
    navigate('/login');
  };

  const handleLogout = ()=>{
    logout();
    localStorage.removeItem('user');
    navigate('/');
  }

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/"><img src={logo} alt='logo'/></a>
        
      </div>

      <div className="navbar-icons">
        
        {isLoggedIn ? (
          <div className="user-dropdown">
            <button className="user-button" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={faUser} /> Admin
            </button>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <a href="/profile">My Profile</a>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <button className="login-button" onClick={handleLoginClick}>
            <FontAwesomeIcon icon={faUser} /> Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default AdminNav;
