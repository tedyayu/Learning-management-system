import { useState, useContext, useEffect } from 'react';
import { DepartmentContext } from '../context/departmentContext';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const { departments } = useContext(DepartmentContext);
  const [expanded, setExpanded] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (departments && departments.length > 0) {
      const allOpen = {};
      departments.forEach(dep => {
        const deptId = dep.id || dep._id;
        allOpen[deptId] = true;
      });
      setExpanded(allOpen);
    }
  }, [departments]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      return;
    }

    const lowerTerm = searchTerm.toLowerCase();
    const results = [];

    departments.forEach(department => {
      if (Array.isArray(department.courses)) {
        department.courses.forEach(course => {
          if (course.name.toLowerCase().includes(lowerTerm)) {
            results.push({
              course,
              department
            });
          }
        });
      }
    });

    setSearchResults(results);
  };

  const toggleExpand = (deptId) => {
    setExpanded((prev) => ({ ...prev, [deptId]: !prev[deptId] }));
  };

  return (
    <div className="min-h-screen py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-800 mb-6">Departments and Courses</h2>

        {/* Search Input */}
        <div className="mb-6">
          <label htmlFor="courseSearch" className="block text-md font-medium text-gray-700 mb-1">
            Search Courses
          </label>
          <div className="flex items-center">
            <input
              type="text"
              id="courseSearch"
              placeholder="Enter course name"
              value={searchTerm}
              onChange={handleInputChange}
              className="shadow-sm border border-gray-300 rounded-lg py-2 px-4 w-full focus:ring-500 focus:border-500"
            />
            <button
              onClick={handleSearch}
              className="ml-3 bg-600 text-blue-900 px-5 py-2 rounded-lg hover:bg-700"
            >
              Go
            </button>
          </div>
        </div>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4">Search Results</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {searchResults.map(({ course, department }, index) => (
                <div
                  key={course.id || course._id || index}
                  className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden group border border-purple-100"
                >
                  <div className="relative">
                    <img
                      src={course.courseImageurl || "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80"}
                      alt={course.name}
                      className="h-44 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-purple-600 text-white text-xs px-3 py-1 rounded-full shadow font-semibold uppercase tracking-wide">
                      {course.level || "Course"}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col h-40">
                    <h5 className="text-l font-bold text-gray-800 mb-2">
                      {course.name}
                    </h5>
                    <div className="mt-auto flex items-center justify-between">
                      <button
                        onClick={() => navigate(`/course/${course.id}/Home`, { state: { course, department } })}
                        className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold shadow hover:from-purple-600 hover:to-blue-600 transition text-sm"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Department & Courses */}
        {departments && departments.length > 0 ? (
          departments.map((department) => {
            const deptId = department.id || department._id;
            return (
              <div key={deptId} className="mb-10">
                <div
                  className="flex justify-between items-center cursor-pointer bg-gray-200 px-4 py-3 rounded-lg"
                  onClick={() => toggleExpand(deptId)}
                >
                  <h3 className="text-xl font-semibold text-900">{department.name}</h3>
                  <span className="text-700 font-medium">
                    {expanded[deptId] ? "▼ Collapse" : "► Expand"}
                  </span>
                </div>

                {expanded[deptId] && (
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                    {Array.isArray(department.courses) && department.courses.length > 0 ? (
                      department.courses.map((course, index) => (
                        <div
                          key={course.id || course._id || index}
                          className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden group border border-purple-100"
                        >
                          <div className="relative">
                            <img
                              src={course.courseImageurl || "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80"}
                              alt={course.name}
                              className="h-44 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-3 right-3 bg-purple-600 text-white text-xs px-3 py-1 rounded-full shadow font-semibold uppercase tracking-wide">
                              {course.level || "Course"}
                            </div>
                          </div>
                          <div className="p-5 flex flex-col h-40">
                            <h5 className="text-l font-bold text-gray-800 mb-2">
                              {course.name}
                            </h5>
                            <div className="mt-auto flex items-center justify-between">
                              <button
                                onClick={() => navigate(`/course/${course.id}/Home`, { state: { course, department } })}
                                className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold shadow hover:from-purple-600 hover:to-blue-600 transition text-sm"
                              >
                                View Details
                              </button>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500 col-span-full">No courses available.</p>
                    )}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <p className="text-gray-600">No departments found.</p>
        )}
      </div>
    </div>
  );
};

export default Courses;