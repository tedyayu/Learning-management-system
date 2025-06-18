import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = ({ isLoggedIn, user }) => {
  const navigate = useNavigate();

  const [isExpanded, setIsExpanded] = useState({
    home: true,
    courses: true,
  });

  const toggleExpand = (item) => {
    setIsExpanded((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  return (
    <nav className="navigation-menu max-w-xs bg-white p-4 rounded-lg text-gray-800 border border-gray-300">
      <ul>
        {/* Home */}
        <li className="mb-2">
          <button
            onClick={() => toggleExpand('home')}
            className="flex justify-between items-center w-full p-2 bg-gray-700 rounded text-white"
          >
            Home
          </button>
          {isExpanded.home && (
            <ul className="mt-2 ml-4">
              <li
                className="p-2 bg-gray-200 rounded mb-1 hover:bg-gray-300 cursor-pointer"
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    const el = document.getElementById('site-news-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                Admin news
              </li>
              <li
                className="p-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    const el = document.getElementById('courses');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                Courses
              </li>
            </ul>
          )}
        </li>

        {/* Courses */}
        <li className="mb-2">
          <button
            onClick={() => toggleExpand('courses')}
            className="flex justify-between items-center w-full p-2 bg-gray-700 rounded text-white"
          >
            Courses
          </button>
          {isExpanded.courses && (
            <div className="mt-2 ml-2">
              {!isLoggedIn ? (
                <p className="text-sm text-gray-600">Login to view courses</p>
              ) : (
                <>
                  <p className="font-bold mb-2">My Courses</p>
                  <ul>
                    {Array.isArray(user?.student?.CourseEnrollments) &&
                    user.student.CourseEnrollments.length > 0 ? (
                      user.student.CourseEnrollments.map(({ course }) => (
                        course && (
                          <li
                            key={course.id}
                            className="mb-2 rounded p-2 bg-gray-100 cursor-pointer hover:bg-gray-200"
                            onClick={() => navigate(`/course/${course.id}`, { state: { course, userId: user.id } })}
                          >
                            {course.name}
                          </li>
                        )
                      ))
                    ) : (
                      <p className="text-sm text-gray-500">No course found</p>
                    )}
                  </ul>
                </>
              )}
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;