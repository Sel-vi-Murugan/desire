import React, { useEffect, useState } from 'react';
import '../styles/ProfilePage.css';

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const token = 'your-auth-token'; 
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('http://localhost:8080/users/current', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error(`Error! status: ${response.status}`);
                }

                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchUser();
    }, [token]);

    if (!user) {
        return <div>Loading...</div>;
    }

    const handleEditClick = () => {
        alert('Edit functionality coming soon!');
    };

    return (
        <div className="profile-container">
            <h1>User Profile</h1>
            <div className="profile-details">
                <div className="profile-item">
                    <label>ID:</label>
                    <span>{user.id}</span>
                </div>
                <div className="profile-item">
                    <label>Name:</label>
                    <span>{user.customerName}</span>
                </div>
                <div className="profile-item">
                    <label>Email:</label>
                    <span>{user.email}</span>
                </div>
                <div className="profile-item">
                    <label>Password:</label>
                    <span>*******</span>
                </div>
            </div>
            <button className="edit-button" onClick={handleEditClick}>Edit Profile</button>
        </div>
    );
};

export default ProfilePage;
