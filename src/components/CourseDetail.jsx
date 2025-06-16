import { useLocation } from 'react-router-dom';

const CourseDetails = () => {
    const { state } = useLocation();
  const course = state?.course;

 

  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <div className="bg-gray-800 text-white py-10 px-6">
        <h1 className="text-3xl font-bold">{course.name}</h1>
        <p className="mt-4 max-w-xl">{course.description}</p>

        {course.courseImageurl && (
          <div className="mt-6">
            <img
              src={course.courseImageurl}
              alt={course.name}
              className="w-full max-w-lg rounded-md shadow-lg"
            />
          </div>
        )}
      </div>

      {/* Chapters and Lessons */}
      <div className="py-8 px-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-700">Course Content</h2>

        {course.Chapter?.map((chapter, chapterIdx) => (
          <div key={chapterIdx} className="mb-8 bg-gray-100 rounded-lg p-6 shadow">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">{chapter.title}</h3>

            <div className="grid gap-4">
              {chapter.lessons?.map((lesson, lessonIdx) => (
                <div
                  key={lessonIdx}
                  className="p-4 bg-white rounded shadow-sm border border-gray-200"
                >
                  <p className="text-gray-800">{lesson.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
