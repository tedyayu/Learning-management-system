import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const CourseDetails = () => {
  const { state } = useLocation();
  const course = state?.course;
  const department = state?.department;

  const [openLessons, setOpenLessons] = useState({});

  const toggleLesson = (lessonId) => {
    setOpenLessons((prev) => ({
      ...prev,
      [lessonId]: !prev[lessonId],
    }));
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <div className="bg-gray-800 text-white py-10 px-6 flex flex-col md:flex-row justify-between items-start">
        <div className="md:w-1/2">
            <h1 className="text-3xl font-bold">{course.name}</h1>
            <h3 className="text-xl mt-5">{department.name}</h3>
        </div>
        {course.courseImageurl && (
            <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <img
                src={course.courseImageurl}
                alt={course.name}
                className="w-full max-w-md h-auto rounded-lg shadow-xl object-cover"
            />
            </div>
        )}
        </div>


      {/* Course Description */}
      <div className="py-6 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Course Description</h2>
        <p className="text-gray-700">{course.description}</p>
      </div>

      {/* Chapters and Lessons */}
      <div className="py-8 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Course Content</h2>

        {course.Chapter?.map((chapter, chapterIdx) => (
          <div key={chapterIdx} className="mb-8 bg-gray-100 rounded-lg p-6 shadow">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">{chapter.title}</h3>

            <div className="grid gap-4">
              {chapter.lessons?.map((lesson, lessonIdx) => (
                <div
                  key={lessonIdx}
                  className="p-4 bg-white rounded shadow-sm border border-gray-200"
                >
                  <div className="flex justify-between items-center">
                    <p className="text-gray-800 font-medium">{lesson.title}</p>
                    
                  </div>
                  {openLessons[lesson.id] && (
                    <p className="mt-2 text-gray-600">{lesson.description || "No description available."}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* About Instructor */}
      {course.instructor && (
        <div className="bg-gray-50 px-6 py-8 max-w-4xl mx-auto rounded shadow">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">Instructors</h2>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            {course.instructor.profilePhotoURL && (
              <img
                src={course.instructor.profilePhotoURL}
                alt={`${course.instructor.firstName} ${course.instructor.lastName}`}
                className="w-32 h-32 rounded-full object-cover shadow-md"
              />
            )}
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                {course.instructor.firstName} {course.instructor.lastName}
              </h3>
              <p className="mt-2 text-gray-700">{course.instructor.bio || "No bio available."}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
