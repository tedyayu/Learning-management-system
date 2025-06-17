import { useNavigate } from "react-router-dom"; 


const CourseOverview = ({ user }) => {
  const navigate = useNavigate();

   const handleCourseClick = (course, userId) => {
    navigate(`/course/${course.id}`, { state: { course , userId } });
  };

  return (
    <div className="container mx-auto py-8 min-h-screen">
      <h3 className="font-sans text-2xl font-semibold mb-6">Courses I'm Taking</h3>

     

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.isArray(user?.student?.CourseEnrollments) &&
        user.student.CourseEnrollments.flatMap((e) => e.course).length > 0 ? (
          user.student.CourseEnrollments.flatMap((e) => e.course).map(
            (course, index) => (
              
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow duration-300"
                onClick={() => handleCourseClick(course , user.id)}
              >
                <div className="h-32 bg-gradient-to-br from-gray-200 to-gray-300">
                  <img
                    src={course.courseImageurl }
                    alt={course.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-1">{course?.department?.name}</p>
                  <h4 className="font-semibold text-md text-gray-800 leading-snug">
                    {course.name}
                  </h4>

                  
                </div>
              </div>
            )
          )
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No courses found.
          </p>
        )}
      </div>
    </div>
  );
};

export default CourseOverview;
