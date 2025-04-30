import { useState, useContext } from "react";
import { CourseContext } from "../../context/CourseContext";
import { DepartmentContext } from "../../context/departmentContext";
import { StudentContext } from "../../context/StudentContext";
import { useNavigate } from "react-router-dom";

const CourseEnrollment = () => {
  const navigate = useNavigate();

  const { courses } = useContext(CourseContext);
  const { departments } = useContext(DepartmentContext);
  const { students } = useContext(StudentContext);

  const [searchQuery, setSearchQuery] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedStudentIds, setSelectedStudentIds] = useState([]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setDepartmentFilter(e.target.value);
  };

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  const handleCheckboxChange = (studentId) => {
    if (selectedStudentIds.includes(studentId)) {
      setSelectedStudentIds(selectedStudentIds.filter((id) => id !== studentId));
    } else {
      setSelectedStudentIds([...selectedStudentIds, studentId]);
    }
  };

  const handleEnrollStudents = async () => {
    if (!selectedCourse) {
      alert("Please select a course first.");
      return;
    }
    if (selectedStudentIds.length === 0) {
      alert("Please select at least one student.");
      return;
    }
    const selectedStudents = students.filter((student) => selectedStudentIds.includes(student.id));
    
    try {
          console.log("Sending request to enroll:", selectedStudents , selectedCourse);
          const response = await enrollStudents(selectedStudents , selectedCourse);
          if (response.error) {
            console.error("response error", response.error);
          } else {
            alert(`Enrolled ${selectedStudents.length} student(s) to course ID: ${selectedCourse}`);
            setSelectedStudentIds([]); 
            setSelectedCourse(""); 
          }
        } catch (error) {
          console.error("error registering user", error);
        }
    
  };

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      (student.student.firstName?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
      (student.email?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
      (student.phone || "").includes(searchQuery);
  
    const matchesDepartment =
      departmentFilter === "" || student.student.department === departmentFilter;
  
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          className="flex items-center text-blue-600 font-semibold"
          onClick={() => navigate("/AdminDashboard")}
        >
          ← Back to Dashboard
        </button>
        <button
          onClick={handleEnrollStudents}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center"
        >
          ✓ Enroll students
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <input
          type="text"
          placeholder="Search students"
          value={searchQuery}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded"
        />
        <select
          value={departmentFilter}
          onChange={handleDepartmentChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">Filter by department</option>
          {departments.map((dept) => (
            <option key={dept.id} value={dept.name}>
              {dept.name}
            </option>
          ))}
        </select>
        <select
          value={selectedCourse}
          onChange={handleCourseChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">Select course</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.name}
            </option>
          ))}
        </select>
      </div>

      {/* Students Table */}
      <div className="bg-white shadow-md rounded overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setSelectedStudentIds(
                      e.target.checked ? filteredStudents.map((s) => s.id) : []
                    )
                  }
                  checked={
                    filteredStudents.length > 0 &&
                    selectedStudentIds.length === filteredStudents.length
                  }
                />
              </th>
              <th className="p-3 text-left">Full Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Department</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id} className="border-t">
                <td className="p-3">
                  <input
                    type="checkbox"
                    checked={selectedStudentIds.includes(student.id)}
                    onChange={() => handleCheckboxChange(student.id)}
                  />
                </td>
                <td className="p-3">{student.student.firstName}</td>
                <td className="p-3">{student.email || "-"}</td>
                <td className="p-3">{student.phone || "-"}</td>
                <td className="p-3">{student.student.department || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredStudents.length === 0 && (
          <div className="p-6 text-center text-gray-500">No students found.</div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-4 text-sm text-gray-600">
        {filteredStudents.length} Student{filteredStudents.length !== 1 && "s"}
      </div>
    </div>
  );
};

export default CourseEnrollment;
