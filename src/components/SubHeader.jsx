//import React from 'react';

const SubHeader = () => {
  return (
    <div className="bg-white py-10 border-t border-gray-700">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-4xl font-thin">
              Afro-Lang E-Learning Portal
            </span>
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