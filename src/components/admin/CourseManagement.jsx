import { FaBook, FaEye, FaTrash, FaCog , FaLock} from "react-icons/fa";
import CreateCourses from "./CreateCourses";
import { useState, useContext } from "react";
import { CourseContext } from "../../context/CourseContext";
import { useNavigate } from "react-router-dom";

const CourseManagement = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const { courses } = useContext(CourseContext);
  const navigate = useNavigate();

  const handleNewButtonClick = () => {
    setShowCreateForm(true);
  };
  const handleCloseForm = () => {
    setShowCreateForm(false); // Close the form
  };

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType ? course.type === filterType : true;
    const matchesCategory = filterCategory ? course.category === filterCategory : true;
    return matchesSearch && matchesType && matchesCategory;
  });

  // const handleCourseClick = (courseId) => {
  //   navigate(`/AdminDashboard/course/${courseId}`);
  // };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <FaBook className="text-blue-500 text-2xl mr-2" />
          <h2 className="text-2xl font-semibold">Courses</h2>
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          onClick={handleNewButtonClick}
        >
          + Create
        </button>
      </div>

      <p className="text-gray-500 mb-4">
        Craft and oversee your course by developing tailored content and managing progress efficiently
      </p>

      {showCreateForm && <CreateCourses onClose={handleCloseForm} />}

       {/* Filters */}
       <div className="flex flex-wrap items-center gap-3 mb-6">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-48 focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 bg-white w-40 focus:outline-none"
        >
          <option value="">All courses</option>
          <option value="free">Free</option>
          <option value="paid">Paid</option>
        </select>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 bg-white w-44 focus:outline-none"
        >
          <option value="">Select category</option>
          <option value="programming">Programming</option>
          <option value="design">Design</option>
          <option value="business">Business</option>
        </select>

        <button
          className="text-blue-500 text-sm underline"
          onClick={() => {
            setSearchTerm("");
            setFilterType("");
            setFilterCategory("");
          }}
        >
          Reset
        </button>
      </div>

      <div className="space-y-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex items-center justify-between p-4 bg-gray-50 border rounded-lg shadow-sm"
          >
            {/* Course Info Section */}
            <div className="flex items-center space-x-4">
              <img
                src={course.image}
                
                className="w-20 h-20 rounded-md object-cover"
              />
              <div>
                <h3 className="text-md font-semibold text-gray-800">
                  {course.name}
                </h3>
                <p className="text-sm text-gray-600">
                  Amount: <span className="text-green-600">{course.amount || "Free"}</span>
                </p>
                <p className="text-sm text-gray-600">
                  Validity: <span className="text-green-600">{course.validity || "Unlimited"}</span>
                </p>
              </div>
            </div>

            {/* Status and Actions */}
            <div className="flex items-center space-x-6">
              <span className="flex items-center text-yellow-600 font-medium text-sm">
                <FaLock className="mr-1" /> Inactive
              </span>
              <div className="flex space-x-2">
                <button
                  // onClick={() => handleCourseClick(course.id)}
                  className="p-2 rounded-md border hover:bg-gray-200"
                  title="View"
                >
                  <FaEye />
                </button>
                <button className="p-2 rounded-md border hover:bg-gray-200" title="Edit">
                  <FaCog />
                </button>
                <button className="p-2 rounded-md border hover:bg-gray-200" title="Delete">
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseManagement;
