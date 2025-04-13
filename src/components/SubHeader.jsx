//import React from 'react';

const SubHeader = ({isLoggedIn,user}) => {
  return (
    <div className="bg-white py-10 border-t border-gray-700">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            
            {isLoggedIn ? (<span className="text-4xl font-thin">Welcome {user.student.firstName}</span>):(
              <span className="text-4xl font-thin">
              Afro-Lang E-Learning Portal
            </span>)}
          </div>
          <div>
            <a href="#" className="text-blue-500 hover:underline">
              Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;