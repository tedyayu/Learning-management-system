import React from 'react'; 
import {Link} from 'react-router-dom'

const UserDashboard = () => {
  const user = {
    name: 'Tewodros Ayehualem',
    location: 'Arba Minch, Southern Nations, Nationalities and Peoples, Ethiopia',
    profilePicture: 'https://via.placeholder.com/50', // Replace with actual profile picture URL
  };

  return (
    <div className="bg-gray-100 min-h-4">
      <div className="bg-white p-8 shadow-md">
        <div className="flex items-center">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="rounded-full h-16 w-16 mr-4"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
           
          </div>
        </div>
        
      </div>
      <div className="bg-gray-200 p-4 ">
        <Link to="/">Dashboard/</Link>
        <Link to="/GradesPage">Grades/</Link>
      </div>
    
    </div>
  );
};

export default UserDashboard;