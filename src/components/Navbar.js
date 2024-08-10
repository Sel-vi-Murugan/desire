import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {React,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import { AuthProvider,useAuth } from '../contexts/AuthContext';
import logo from '../assets/logo2.png';

const Navbar = () => {

  const navigate = useNavigate();
  const { isLoggedIn, user, logout } = useAuth(AuthProvider);
  const [isDropdownOpen, setDropdownOpen] = useState(false);


  const handleLoginClick = (e) => {
    e.preventDefault(); 
    navigate('/login');
  };

  const handleLogout = ()=>{
    logout();
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
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/products">Product</a>
        <a href="/category">Category</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/addProduct">Blog</a>
      </div>
      <div className="navbar-icons">
        <a href="/search"><FontAwesomeIcon icon={faSearch} /></a>
        <a href="/cart"><FontAwesomeIcon icon={faShoppingCart} /></a>
        {isLoggedIn ? (
          <div className="user-dropdown">
            <button className="user-button" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={faUser} /> {user.email === 'selvi.admin@desire.com' ? 'Admin' : user.customerName}
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

export default Navbar;
