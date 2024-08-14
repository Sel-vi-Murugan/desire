import React from 'react';
import { FaBoxOpen, FaTachometerAlt, FaTags, FaUsers } from 'react-icons/fa';
import '../styles/adminSidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>Admin Panel</h2>
            </div>
            <ul className="sidebar-menu">
                <li><a href="/admin"><FaTachometerAlt /> Dashboard</a></li>
                <li><a href="/productManage"><FaBoxOpen /> Products</a></li>
                <li><a href="/category"><FaTags /> Categories</a></li>
                <li><a href="/user-list"><FaUsers /> Users</a></li>
                <li><a href="/about"> About</a></li>
                
            </ul>
        </div>
    );
};

export default Sidebar;
