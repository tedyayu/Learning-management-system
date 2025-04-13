import { FaBook } from "react-icons/fa";
import CreateCourses from "./CreateCourses";
import { useState , useContext} from "react";
import { CourseContext } from "../../context/CourseContext";
import { useNavigate } from "react-router-dom";

const CourseManagement = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const { courses } = useContext(CourseContext);
  const navigate = useNavigate();

  const handleNewButtonClick = () => {
    setShowCreateForm(true);
  };

  const handleCourseClick = (courseId) => {
    navigate(`/AdminDashboard/course/${courseId}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <FaBook className="text-blue-500 text-2xl mr-2" />
          <h2 className="text-2xl font-semibold">My Courses</h2>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200" onClick={handleNewButtonClick}>
          Create a New Course
        </button>
      </div>
      {showCreateForm && <CreateCourses />}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer"
            onClick={() => handleCourseClick(course.id)}
          >
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold">{course.name}</h3>
            <p className="text-gray-600 text-sm mt-2">{course.startDate}</p>
            <p className="text-gray-800 font-medium mt-2">{course.syllabus}</p>
            <p className="text-gray-500 text-sm mt-1">{course.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseManagement;