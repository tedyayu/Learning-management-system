import { useState , useContext} from "react";
import { CourseContext } from "../../context/CourseContext";
import { DepartmentContext } from '../../context/departmentContext'; 
import {StudentContext} from "../../context/StudentContext"





const EnrollmentAccess = () => {
  const { courses } = useContext(CourseContext);
  const { departments } = useContext(DepartmentContext); 
  const { students } = useContext(StudentContext);
  
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");
  //const [filteredStudents, setFilteredStudents] = useState(dummyStudents);

  // Handle course selection
  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  // Handle checkbox change for student selection
  const handleCheckboxChange = (studentId) => {
    setSelectedStudents((prev) =>
      prev.includes(studentId)
        ? prev.filter((id) => id !== studentId)
        : [...prev, studentId]
    );
  };

  // Handle "Select All" checkbox
  // const handleSelectAll = (e) => {
  //   if (e.target.checked) {
  //     const allStudentIds = filteredStudents.map((student) => student.id);
  //     setSelectedStudents(allStudentIds);
  //   } else {
  //     setSelectedStudents([]);
  //   }
  // };

  // Handle search input change
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search button click
  // const handleSearch = async () => {
  //   if (!searchQuery) {
  //     setFilteredStudents(dummyStudents);
  //     return;
  //   }

  //   try {
  //     const response = await fetch(`https://api.example.com/students?search=${searchQuery}`);
  //     const data = await response.json();

  //     const filtered = data.length
  //       ? data
  //       : dummyStudents.filter((student) =>
  //           student.name.toLowerCase().includes(searchQuery.toLowerCase())
  //         );

  //     setFilteredStudents(filtered);
  //   } catch (error) {
  //     console.error("Error fetching students:", error);
  //     setFilteredStudents(dummyStudents);
  //   }
  // };

  // Handle department filter change
  const handleDepartmentFilterChange = (e) => {
    setDepartmentFilter(e.target.value);
  };

  // Filter students by department and search query
  // const getFilteredStudents = () => {
  //   let result = dummyStudents;

  //   if (searchQuery) {
  //     result = result.filter((student) =>
  //       student.name.toLowerCase().includes(searchQuery.toLowerCase())
  //     );
  //   }

  //   if (departmentFilter) {
  //     result = result.filter((student) => student.department === departmentFilter);
  //   }

  //   return result;
  // };

  // const filteredList = getFilteredStudents();

  // Handle enroll action
  const handleEnroll = () => {
    if (!selectedCourse) {
      alert("Please select a course first.");
      return;
    }

    if (selectedStudents.length === 0) {
      alert("Please select at least one student.");
      return;
    }

    alert(`Enrolled ${selectedStudents.length} students to ${selectedCourse}`);
    // Perform enrollment logic here
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl ">
      <h1 className="text-2xl font-bold mb-6 text-center">Course Enrollment</h1>

      {/* Search Bar with Button */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Search Students</label>
        <div className="flex">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder="Search by name"
            className="w-full border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            // onClick={handleSearch}
            className="bg-blue-600 text-white px-6 py-2 rounded-r hover:bg-blue-700"
          >
            Search
          </button>
        </div>
      </div>

      {/* Department Filter */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Filter by Department</label>
        <select
          value={departmentFilter}
          onChange={handleDepartmentFilterChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a department</option>
             {departments.map((department) => (
              <option key={department.id} value={department.id}>
                {department.name}
              </option>
            ))}
        </select>
      </div>

      {/* Select Course */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Select Course</label>
        <select
          value={selectedCourse}
          onChange={handleCourseChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Choose a course --</option>
          {courses.map((course) => (
            <option key={course.id} value={course.name}>
              {course.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Select Students to Enroll</h2>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            // onChange={handleSelectAll}
            // checked={selectedStudents.length === filteredList.length && filteredList.length > 0}
            className="w-4 h-4 mr-2"
          />
          <label className="text-gray-700 font-medium">Select All</label>
        </div>
        <ul className="divide-y border rounded-md mb-4">
          {students.map((student) => (
            <li
              key={student.id}
              className="flex items-center justify-between p-3 hover:bg-gray-50"
            >
              <div>
                <div className="font-medium">{student.student.firstName}</div>
                <div className="text-sm text-gray-500">
                  Dept: {student.student.department} | ID: {student.student.studentId}
                </div>
              </div>
              <input
                type="checkbox"
                checked={selectedStudents.includes(student.id)}
                onChange={() => handleCheckboxChange(student.id)}
                className="w-4 h-4"
              />
            </li>
          ))}
        </ul>

        <button
          onClick={handleEnroll}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          disabled={!selectedCourse || selectedStudents.length === 0}
        >
          Enroll Selected Students
        </button>
      </div>
    </div>
  );
};

export default EnrollmentAccess;