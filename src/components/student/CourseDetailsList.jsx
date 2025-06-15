import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CourseDetailsList = ({ user }) => {
  const [activeTab, setActiveTab] = useState("curriculum");
  const navigate = useNavigate();

  const enrolledCourses =
    Array.isArray(user?.student?.CourseEnrollments) &&
    user.student.CourseEnrollments.flatMap((e) => e.course);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      {enrolledCourses && enrolledCourses.length > 0 && (
        enrolledCourses.map((course, courseIndex) => (
          <div key={courseIndex} className="bg-gray-800 text-white py-6 px-8 ">
            <h1 className="text-2xl font-bold">{course.name}</h1>
            <p className="text-sm text-blue-100 mt-1">
              {course.department?.name}
            </p>

            

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="bg-white h-1 w-full rounded-full">
                <div className="bg-blue-400 h-1 rounded-full w-full"></div>
              </div>
              <p className="text-xs mt-1">100%</p>
            </div>
          </div>
        ))
      )}

      {/* Tabs */}
      <div className="border-b border-gray-200 px-8 mt-6">
        <div className="flex space-x-6 text-sm font-medium">
          <button
            onClick={() => setActiveTab("curriculum")}
            className={`py-2 ${
              activeTab === "curriculum"
                ? "border-b-2 border-blue-700 text-blue-700"
                : "text-gray-500"
            }`}
          >
            Curriculum
          </button>
          <button
            onClick={() => setActiveTab("overview")}
            className={`py-2 ${
              activeTab === "overview"
                ? "border-b-2 border-blue-700 text-blue-700"
                : "text-gray-500"
            }`}
          >
            Overview
          </button>
        </div>
      </div>

      {/* Curriculum Content */}
      {activeTab === "curriculum" && (
        <div className="px-8 py-6 space-y-4">
          {enrolledCourses &&
          enrolledCourses.map((course, courseIndex) =>
            Array.isArray(course.Chapter) && course.Chapter.length > 0 ? (
              course.Chapter.map((chapter, chapterIndex) => (
                <div
                  key={chapter.id || chapterIndex}
                  className="border border-gray-200 rounded-md p-4 bg-white shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full border-4 border-blue-600 flex items-center justify-center font-bold text-blue-700 text-sm">
                        100%
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">{course.name}</p>
                        <h2 className="text-md font-semibold">
                          {chapter.name || chapter.title || `Chapter ${chapterIndex + 1}`}
                        </h2>
                        <button
                          onClick={() => navigate(`/ContentDetail/${chapter.id}`, { state: { chapter } })}
                          className="mt-2 inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
                        >
                          ▶️ continue studying
                        </button>
                      </div>
                    </div>
                  </div>
                  {chapter.description && (
                    <p className="text-sm text-gray-600 mt-3">{chapter.description}</p>
                  )}
                </div>
              ))
            ) : null
          )
        }
        </div>
      )}

      {/* Overview Tab */}
      {activeTab === "overview" && (
        <div className="px-8 py-6 text-gray-600 text-sm">
          <p>
            This is the course overview content. You can add detailed program
            information here.
          </p>
        </div>
      )}
    </div>
  );
};

export default CourseDetailsList;
