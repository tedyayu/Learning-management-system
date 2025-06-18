import { FaStar, FaBell } from "react-icons/fa";

const Header = ({user}) => {
  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between w-full">
      <div className="flex items-center ">
        <img
          src="../../../image.jpg"
          alt="Logo"
          className="h-10 w-auto mr-4 border border-2-gray-800"
        />
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
      </div>
      <div className="flex items-center space-x-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
      </div>
      <div className="flex items-center space-x-4">
        <FaBell className="text-gray-600 text-xl cursor-pointer hover:text-blue-500 ml-30" />
        <div className="flex items-center space-x-2">
       

          <img
            src="https://via.placeholder.com/40" 
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-gray-800 font-medium">Admin</p>
           
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;