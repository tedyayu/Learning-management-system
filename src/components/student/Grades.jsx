import React from 'react';

const Grades = ({course}) => {
  

  console.log(course)

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
    
      <h3 className="text-xl font-medium mb-2">
        {course.name}
      </h3>

      {/* Overview Report Link (Optional) */}
      <a href="#" className="text-blue-500 hover:underline mb-4 block">
        Overview report
      </a>

      {/* User Report Link (Optional) */}
      <a href="#" className="text-blue-500 hover:underline mb-4 block">
        User report
      </a>

      {/* Grade Table */}
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
              Grade item
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
              Calculated weight
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
              Grade
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
              Range
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
              Percentage
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
              Letter grade
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
              Rank
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
              Feedback
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
              Contribution to course total
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Course Total Row */}
          <tr className="border-t border-gray-300"> {/* Add top border */}
            <td className="px-4 py-2 whitespace-nowrap font-medium">
              Course total
            </td>
            <td className="px-4 py-2 whitespace-nowrap">
              {/* Add calculated weight if needed */}
            </td>
            <td className="px-4 py-2 whitespace-nowrap">
              {course.details.grades}
            </td>
            <td className="px-4 py-2 whitespace-nowrap">
              0-100
            </td>
            <td className="px-4 py-2 whitespace-nowrap">
              {/* Add percentage if needed */}
            </td>
            <td className="px-4 py-2 whitespace-nowrap">
              {/* Add letter grade if needed */}
            </td>
            <td className="px-4 py-2 whitespace-nowrap">
              {/* Add rank if needed */}
            </td>
            <td className="px-4 py-2 whitespace-nowrap">
              {/* Add feedback if needed */}
            </td>
            <td className="px-4 py-2 whitespace-nowrap">
              {/* Add contribution if needed */}
            </td>
          </tr>

          {/* Map through grade items (if any) */}
        
        </tbody>
      </table>

      {/* Course Total Calculation */}
      <p className="mt-4 text-sm text-gray-600">
        Simple weighted mean of grades.
      </p>
    </div>
  );
};

export default Grades;