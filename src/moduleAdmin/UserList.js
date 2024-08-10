import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/UserList.css';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [displayedUsers, setDisplayedUsers] = useState([]);
    const [showMore, setShowMore] = useState(true);
    const token = 'your-auth-token';
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:8080/users', {
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
                console.log('Fetched users:', data);
                setUsers(data);
                setDisplayedUsers(data.slice(0, 5));
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, [token]);

    const handleSeeMore = () => {
        const newDisplayedUsersCount = displayedUsers.length + 5;
        if (newDisplayedUsersCount >= users.length) {
            setDisplayedUsers(users);
            setShowMore(false);
        } else {
            setDisplayedUsers(users.slice(0, newDisplayedUsersCount));
        }
    };

    const handleAddUserClick = () => {
        navigate('/add-user'); // Navigate to the AddUser page
    };

    const handleRemove = async (userId) => {
        if (window.confirm("Are you sure you want to remove this user?")) {
            try {
                const response = await fetch(`http://localhost:8080/users/delete/${userId}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}` 
                    }
                });
    
                if (response.ok) {
                    alert('User removed successfully!');
                    setUsers(users.filter(user => user.id !== userId));
                    setDisplayedUsers(displayedUsers.filter(user => user.id !== userId));
                } else {
                    alert('Failed to remove user!');
                }
            } catch (error) {
                console.error('Error removing user:', error);
                alert('An error occurred while removing the user.');
            }
        }
    };
    

    return (
        <div className="table-container">
            <h1>Admin Panel - Users List</h1>
            <div className="button-container">
                <button className="add-button" onClick={handleAddUserClick}> + Add More Users</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {displayedUsers.length > 0 ? (
                        displayedUsers.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.customerName}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className="remove-button" onClick={() => handleRemove(user.id)}>Remove</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No users found</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {showMore && (
                <button onClick={handleSeeMore} className="see-more-button">See More</button>
            )}
        </div>
    );
};

export default UserList;
