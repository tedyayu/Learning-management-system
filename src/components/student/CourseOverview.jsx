import { useNavigate } from "react-router-dom";


const CourseOverview = ({ user }) => {
  const navigate = useNavigate();

   const handleCourseClick = (course, userId) => {
    navigate(`/course/${course.id}`, { state: { course , userId } });
  };

  return (
    <div className="container mx-auto py-8">
      <h3 className="font-sans text-2xl font-semibold mb-6">Courses I'm Taking</h3>

      {/* Filter and Sort Controls */}
      <div className="flex items-center justify-between mb-6">
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded text-sm">
          ▼ All (except removed from view)
        </button>
        <div className="flex gap-2">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded text-sm flex items-center gap-1">
            <span className="material-symbols-outlined text-base">event_note</span>
            Last accessed
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded text-sm flex items-center gap-1">
            <span className="material-symbols-outlined text-base">view_module</span>
            Card
          </button>
        </div>
      </div>

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
                <div className="h-32 bg-gradient-to-br from-gray-200 to-gray-300"></div>

                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-1">{course?.department?.name}</p>
                  <h4 className="font-semibold text-md text-gray-800 leading-snug">
                    {course.name}
                  </h4>

                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-full rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {course.progress}% complete
                    </p>
                  </div>
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
