// CourseCategories.jsx
import  { useState } from 'react';
import CreateCourseCategory from './CreateCourseCategory';

const CourseCategories = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);


  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleNewButtonClick = () => {
    setShowCreateForm(true);
  };

  return (
    
      <div className="flex-1 p-6">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h1 className="text-xl font-semibold mb-4 text-gray-800">SP LMS: Course Categories</h1>

          {/* Action Buttons */}
          <div className="flex space-x-2 mb-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"  onClick={handleNewButtonClick}>
              + New
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
              Edit
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
              Publish
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
              Unpublish
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
              Archive
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
              Check-in
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
              Trash
            </button>
          </div>

          {/* Search Bar */}
          <div className="mb-4 flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
              className="border rounded px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
              Search
            </button>
            <select className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Search Tools</option>
              {/* Add more options as needed */}
            </select>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
              Clear
            </button>
          </div>

          {/* No Matching Results */}
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded text-gray-700">
            No Matching Results
          </div>
        </div>
        {showCreateForm && <CreateCourseCategory />}
      </div>
 
  );
};

export default CourseCategories;