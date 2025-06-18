import { FaBook } from "react-icons/fa";
import {useContext} from "react";
import {InstractorContext} from "../../context/InstractorContext";
import {useNavigate} from "react-router-dom";


const MyCourses = () => {

  const {singleInstractor} = useContext(InstractorContext);
  const navigate = useNavigate();
 
 
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full h-screen">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <FaBook className="text-blue-500 text-2xl mr-2" />
          <h2 className="text-2xl font-semibold">My Courses</h2>
        </div>
     
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {singleInstractor?.Courses.map((course) => (
          <div
            key={course.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            onClick={() => navigate(`/InstractorDashboard/mycourses/${course.id}`)}
          >
            <img
              src={course.courseImageurl}
              alt={course.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold">{course.name}</h3>
            <p className="text-gray-600 text-sm mt-2">{course.department}</p>
            <p className="text-gray-800 font-medium mt-2">{course.price}</p>
            <p className="text-gray-500 text-sm mt-1">{course.endDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;