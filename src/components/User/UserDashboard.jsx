import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here, such as clearing tokens or calling an API
    console.log('Logout clicked');

    // Redirect to login page
    navigate('/signin');
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserDashboard;
