import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { fetchSingleCourse } from '../../utils/course.api'; 
import {InstractorContext} from '../../context/InstractorContext';
import { assignInstractor } from '../../utils/course.api';

export const CourseDetailsManagment = () => {
  const { courseId } = useParams();
  const [courseDetails, setCourseDetails] = useState([]);
  const [selectedInstructor, setSelectedInstructor] = useState('');
  const { instractors } = useContext(InstractorContext);
  const [courseDatawithInstractor, setCourseDataWithInstractor] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      const courseData =await fetchSingleCourse(courseId);
      setCourseDetails(courseData);
      console.log("the new course data is",courseDetails);
      setCourseDataWithInstractor(courseData);
    };

    fetchCourseDetails();
  }, [courseId]);

  const handleAssignInstructor = async () => {
    if (selectedInstructor) {
      const courseDataAfterAssignedINstructor= await assignInstractor(courseId, selectedInstructor);
      setCourseDataWithInstractor(courseDataAfterAssignedINstructor);
      console.log("the new course data after assigned instructor is",courseDatawithInstractor);
      alert(`Instructor assigned successfully!`);
    } else {
      alert("Please select an instructor.");
    }
  };

  if (!courseDetails) {
    return <div>Loading course details...</div>;
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-6xl mx-auto ">
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        📚 Click each course to see their details
      </h2>

      <div className="border-t border-gray-200 pt-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Course Details for <span className="text-gray-800">{courseDetails.name}</span>
        </h2>
        <div className="grid gap-3 text-gray-700">
          <p><span className="font-medium text-gray-900">Course Name:</span> {courseDetails.name}</p>
          <p><span className="font-medium text-gray-900">Description:</span> {courseDetails.description}</p>
          <p><span className="font-medium text-gray-900">Start Date:</span> {courseDetails.startDate}</p>
          <p><span className="font-medium text-gray-900">Duration:</span> {courseDetails.duration}</p>
          <p><span className="font-medium text-gray-900">Syllabus:</span> {courseDetails.syllabus}</p>
          <p><span className="font-medium text-gray-900">Price:</span> {courseDetails.price}</p>
          <p>
            <span className="font-medium text-gray-900">Instructor:</span> 
            {courseDatawithInstractor?.instructor?.firstName || "Not assigned yet"}
          </p>        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          👨‍🏫 Assign Instructor
        </h3>
        <select
          value={selectedInstructor}
          onChange={(e) => setSelectedInstructor(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-400 transition-all"
        >
          <option value="">Select an instructor</option>
          {instractors.map((instructor) => (
            <option key={instructor.id} value={instructor.id}>
              {instructor.firstName}
            </option>
          ))}
        </select>
        <button
          onClick={handleAssignInstructor}
          className="mt-4 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 shadow-md transition-all"
        >
          ✅ Assign Instructor
        </button>
      </div>
    </div>

  );
};

