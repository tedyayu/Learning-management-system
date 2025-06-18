import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { fetchSingleCourse, assignInstractor } from "../../utils/course.api";
import { InstractorContext } from "../../context/InstractorContext";


export default function CourseDetailsManagment() {
  const { courseId } = useParams();
  const [courseDetails, setCourseDetails] = useState(null);
  const [selectedInstructor, setSelectedInstructor] = useState('');
  const { instractors } = useContext(InstractorContext);
  const [courseDatawithInstractor, setCourseDataWithInstractor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourseDetails = async () => {
      const courseData = await fetchSingleCourse(courseId);
      setCourseDetails(courseData);
      setCourseDataWithInstractor(courseData);
    };

    fetchCourseDetails();
  }, [courseId]);

  const handleAssignInstructor = async () => {
    if (selectedInstructor) {
      const updatedCourse = await assignInstractor(courseId, selectedInstructor);
      setCourseDataWithInstractor(updatedCourse);
      alert(`Instructor assigned successfully!`);
    } else {
      alert("Please select an instructor.");
    }
  };

   

  const filteredInstructors = instractors.filter(instructor =>
    instructor.firstName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!courseDetails) {
    return <div>Loading course details...</div>;
  }

  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6 w-full">
        <div className="flex flex-wrap gap-3 mb-6 ">   
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => setIsModalOpen(true)}>
            Assign Teachers
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => navigate(`/AdminDashboard/course/${courseId}/enroll`)}>
            Enroll Users
          </button>

        </div>

{isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-10 w-full max-w-4xl relative">
            <button 
              className="absolute top-3 right-4 text-gray-600 hover:text-gray-800"
              onClick={(        ) => setIsModalOpen(false)}
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-4">Assign teachers</h2>
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border border-gray-300 rounded-lg px-2 py-2  focus:ring-2 focus:ring-blue-400"
              />
              <select
                value={selectedInstructor}
                onChange={(e) => setSelectedInstructor(e.target.value)}
                className="border border-gray-300 rounded-lg px-2 py-2 w-1/3 focus:ring-2 focus:ring-blue-400"
              >
                <option value="">All trainers</option>
                {filteredInstructors.map((instructor) => (
                  <option key={instructor.id} value={instructor.id}>
                    {instructor.firstName}
                  </option>
                ))}
              </select>
              <button
                onClick={() => setSearchQuery('')}
                className="text-blue-500 hover:underline"
              >
                Reset
              </button>
              
            </div>
            <div className="text-center text-gray-500 mb-4">
              {filteredInstructors.length === 0 ? "Trainer not found" : ""}
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleAssignInstructor}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Activate
              </button>
            </div>
          </div>
        </div>
      )}
          
    <div className="flex flex-col md:flex-row gap-8 ">
      
      <div className="flex-1">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={courseDetails.courseImageurl || "/default-course-image.jpg"} 
            alt="Course"
            className="w-full h-72 object-cover"
          />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <h1 className="text-3xl font-bold mb-4">
            {courseDetails.name || "Learn Python: From Beginner to Advanced"}
          </h1>
          <p className="text-gray-600 leading-relaxed">
            {courseDetails.description || "No description available."}
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/3">
        <div className="bg-white rounded-lg shadow-md p-6 space-y-6">

          <div className="space-y-4 text-gray-700">
            
            <div className="flex justify-between">
              <span>Language</span>
              <span className="font-semibold">{courseDetails.language || "English"}</span>
            </div>
            <div className="flex justify-between">
              <span>Credits</span>
              <span className="font-semibold">{courseDetails.credits || "0"}</span>
            </div>
            <div className="flex justify-between">
              <span>Department</span>
              <span className="font-semibold">{courseDetails?.department?.name || "General"}</span>
            </div>
            
            <div className="flex justify-between">
              <span>Certifications</span>
              <span className="font-semibold">
                {courseDetails?.Certifications?.includes("Yes") && "Yes" || "No"}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Pass Percentage</span>
              <span className="font-semibold">
                {courseDetails?.passPercentage || "Not available"}
              </span>
            </div>
           
            
            <div className="flex justify-between">
              <span>Instructor</span>
              <span className="font-semibold">
                {courseDatawithInstractor?.instructor?.firstName || "Not assigned yet"}
              </span>
            </div>
          </div>

          
        </div>
      </div>
    </div>
    </div>
  );
}
