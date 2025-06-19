 import {DepartmentContext} from '../context/departmentContext';
import  { useContext } from 'react';



const CourseCategory= () => {
  const { departments } = useContext(DepartmentContext);

  

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-66 mt-4 border-gray-500"> {/* Container for the categories */}
      <h3 className="text-xl font-semibold mb-2">Department categories</h3>
      <ul>
        {departments.map((department, index) => (
          <li key={index} className="flex items-center py-2">
            <span className="mr-2 text-2xl">🎓</span> {/* Icon */}
            <div className="text-blue-500 hover:underline">
              {department.name}
            </div>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default CourseCategory;