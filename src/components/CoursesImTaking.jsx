import React from 'react';

const CoursesImTaking = () => {
  const courses = [
    { name: 'Compiler Design', grade: '-' },
    { name: 'Compiler Design for SE', grade: '-' },
    { name: 'Software Testing and Quality Assurance', grade: '-' },
    { name: 'Mobile Application Development', grade: '-' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Courses I am taking</h3>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
              Course name
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
              Grade
            </th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : ''}`}> {/* Conditional row background */}
              <td className="px-4 py-2 whitespace-nowrap">
                <a href="#" className="text-blue-500 hover:underline"> {/* Make course name a link */}
                  {course.name}
                </a>
              </td>
              <td className="px-4 py-2 whitespace-nowrap">
                {course.grade}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesImTaking;