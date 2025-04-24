import { FaStar, FaBell } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between w-full">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://via.placeholder.com/150" // Replace with actual logo URL
          alt="Logo"
          className="h-10 w-auto mr-4"
        />
        

      </div>

      {/* Search and Navigation */}
      <div className="flex items-center space-x-6">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-4">
          <a href="/marketplace" className="text-gray-600 hover:text-blue-500">
            Marketplace
          </a>
          <a href="/courses" className="text-gray-600 hover:text-blue-500">
            Courses
          </a>
          <a href="/pages" className="text-gray-600 hover:text-blue-500">
            Pages
          </a>
        </nav>
      </div>

      {/* User Profile and Actions */}
      <div className="flex items-center space-x-4">
        {/* User Profile */}
        <FaBell className="text-gray-600 text-xl cursor-pointer hover:text-blue-500 ml-30" />
        <div className="flex items-center space-x-2">
       

          <img
            src="https://via.placeholder.com/40" // Replace with actual user avatar URL
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-gray-800 font-medium">Daniel James</p>
            <div className="flex items-center text-yellow-500">
              <FaStar />
              <span className="text-gray-600 text-sm ml-1">4.28</span>
            </div>
          </div>
        </div>

        {/* Notification Icon */}

      </div>
    </header>
  );
};

export default Header;