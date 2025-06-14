import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ isLoggedIn, user }) => {
  const [isExpanded, setIsExpanded] = useState({
    home: true,
    siteNews: false,
    courses: false,
    // Use courseDetails as an object to track expanded state per course
    courseDetails: {},
  });

  const toggleExpand = (item, id = null) => {
    if (item === 'courseDetails' && id !== null) {
      setIsExpanded((prev) => ({
        ...prev,
        courseDetails: {
          ...prev.courseDetails,
          [id]: !prev.courseDetails[id],
        },
      }));
    } else {
      setIsExpanded((prev) => ({ ...prev, [item]: !prev[item] }));
    }
  };

  return (
    <nav className="navigation-menu max-w-xs bg-white p-4 rounded-lg text-gray-800 border border-gray-300">
      <ul>
        <li className="mb-2">
          <button
            onClick={() => toggleExpand('home')}
            className="flex justify-between items-center w-full p-2 bg-gray-700 rounded text-white"
          >
            Home {isExpanded.home ? '-' : '+'}
          </button>
          {isExpanded.home && (
            <ul className="mt-2 ml-4">
              <li className="p-2 bg-gray-200 rounded mb-1 hover:bg-gray-300">
                Site news
              </li>
              <li className="p-2 bg-gray-200 rounded hover:bg-gray-300">
                Courses
              </li>
            </ul>
          )}
        </li>
        <li className="mb-2">
          <button
            onClick={() => toggleExpand('siteNews')}
            className="flex justify-between items-center w-full p-2 bg-gray-700 rounded text-white"
          >
            Site news {isExpanded.siteNews ? '-' : '+'}
          </button>
          {isExpanded.siteNews && (
            <ul className="mt-2 ml-4">
              <li className="p-2 bg-gray-200 rounded hover:bg-gray-300">
                Site news details
              </li>
            </ul>
          )}
        </li>
        <li className="mb-2">
          <button
            onClick={() => toggleExpand('courses')}
            className="flex justify-between items-center w-full p-2 bg-gray-700 rounded text-white"
          >
            Courses {isExpanded.courses ? '-' : '+'}
          </button>
          {isExpanded.courses && (
  <>
    {!isLoggedIn ? (
      <div>
        <p>Login to view courses</p>
      </div>
    ) : (
      <>
        <p className="font-bold">My Courses</p>
        <ul>
            {Array.isArray(user?.student?.CourseEnrollments) &&
            user.student.CourseEnrollments.flatMap(e => e.course).length > 0 ? (
                user.student.CourseEnrollments.flatMap(e => e.course).map((course) => (
                <li key={course.id} className="mb-2 border rounded p-2">
                    <button
                    onClick={() => toggleExpand('courseDetails', course.id)}
                    className="flex justify-between items-center w-full p-2 bg-gray-700 rounded text-white"
                    >
                    {course.name} {isExpanded.courseDetails[course.id] ? '-' : '+'}
                    </button>
                    {isExpanded.courseDetails[course.id] && (
                    <ul className="mt-2 ml-4">
                        <li className="p-2 bg-gray-200 rounded hover:bg-gray-300">
                        <Link to="/GradesPage" state={{ course }}>
                            Grades
                        </Link>
                        </li>
                        <li className="p-2 bg-gray-200 rounded hover:bg-gray-300">
                        Competencies
                        </li>
                        <li className="p-2 bg-gray-200 rounded hover:bg-gray-300">
                        Badges
                        </li>
                    </ul>
                    )}
                </li>
                ))
            ) : (
                <p>No course found</p>
            )}
            </ul>
        </>
        )}
    </>
    )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;