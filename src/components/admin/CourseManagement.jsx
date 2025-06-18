import { FaBook, FaEye, FaTrash, FaCog , FaLock} from "react-icons/fa";
import CreateCourses from "./CreateCourses";
import {  useContext, useState } from "react";
import { CourseContext } from "../../context/CourseContext";
import { useNavigate } from "react-router-dom";
import { deleteCourse } from "../../utils/course.api"; 

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
    setShowCreateForm(false); 
  };
  const handleEditClick = (courseId) => {
    navigate(`/AdminDashboard/course/${courseId}`);
  };
  const handleDeleteClick = async (courseId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this course?');
    if (confirmDelete) {
      await deleteCourse(courseId);
      alert('Course deleted successfully');
    }
  };
 
  return (
    <div className="bg-white p-6 rounded-lg  w-full">
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

      {showCreateForm && <CreateCourses onClose={handleCloseForm} />}

      

      <div className="space-y-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex items-center justify-between p-4 bg-gray-50 border rounded-lg shadow-sm"
          >
            <div className="flex items-center space-x-4">
              <img
                src={course.courseImageurl}
                className="w-20 h-20 rounded-md object-cover"
              />
              <div>
                <h3 className="text-md font-semibold text-gray-800">
                  {course.name}
                </h3>
                <p className="text-sm text-gray-600">
                  Start Date: <span className="text-gray-800">{course?.startDate || "General"}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              
              <div className="flex space-x-2">
                <button
                  className="p-2 rounded-md border hover:bg-gray-200"
                  title="View"
                >
                  <FaEye />
                </button>
                <button className="p-2 rounded-md border hover:bg-gray-200" title="Edit" onClick={() => handleEditClick(course.id)}>
                  <FaCog />
                </button>
                <button className="p-2 rounded-md border hover:bg-gray-200" title="Delete" onClick={() => handleDeleteClick(course.id)}>
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
