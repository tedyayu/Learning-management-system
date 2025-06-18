import { useState, useEffect, useContext } from "react";
import { PencilIcon, TrashIcon } from "lucide-react";
import { registerStudent, searchUsers } from '../../utils/api';
import { StudentContext } from "../../context/StudentContext";
import { DepartmentContext } from "../../context/departmentContext";

export default function RegisterStudent() {
  const { students, setStudents } = useContext(StudentContext);
  const { departments } = useContext(DepartmentContext);
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({ username: "", password: "", studentId: "", email: "", department: "" });
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState("");

  const addUser = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await registerStudent(newUser);
      if (response.error) {
        setError(response.error.message);
      } else {
        alert("New user added");
        setStudents([...students, { ...newUser, id: students.length + 1 }]);
        setNewUser({ username: "", password: "", studentId: "", email: "", department: "" });
      }
    } catch (error) {
      setError("Error registering user");
      console.error("Register error", error);
    }
  };

  const updateUser = (e) => {
    e.preventDefault();
    setStudents(students.map(user => (user.id === editingUser.id ? editingUser : user)));
    setEditingUser(null);
  };

  const deleteUser = (id) => {
    setStudents(students.filter(user => user.id !== id));
    // Optionally call API: await deleteStudent(id)
  };

  const handleSearch = async () => {
    try {
      const response = await searchUsers(searchQuery);
      setSearchResults(Array.isArray(response) ? response : [response]);
    } catch (error) {
      console.error("Search error", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">Register Student</h1>

      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">Search Student</h2>
        <div className="flex gap-4 mb-4">
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700"
            type="text"
            placeholder="Enter username"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSearch}
          >Search</button>
        </div>
      </div>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl font-semibold mb-4">Search Results</h2>
          <table className="min-w-full border">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Username</th>
                <th className="px-4 py-2 border">ID No</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map(user => (
                <tr key={user.id}>
                  <td className="border px-4 py-2">{user.username}</td>
                  <td className="border px-4 py-2">{user.student?.studentId}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">
                    <button className="text-blue-500 hover:text-blue-700 mr-2" onClick={() => setEditingUser(user)}>
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    <button className="text-red-500 hover:text-red-700" onClick={() => deleteUser(user.id)}>
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Form */}
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={editingUser ? updateUser : addUser}>
        <h2 className="text-xl font-semibold mb-4">{editingUser ? "Edit Student Information" : "Add New Student"}</h2>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700"
            type="text"
            placeholder="Username"
            value={editingUser ? editingUser.username : newUser.username}
            onChange={e => editingUser
              ? setEditingUser({ ...editingUser, username: e.target.value })
              : setNewUser({ ...newUser, username: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700"
            type="password"
            placeholder="Password"
            value={editingUser ? editingUser.password : newUser.password}
            onChange={e => editingUser
              ? setEditingUser({ ...editingUser, password: e.target.value })
              : setNewUser({ ...newUser, password: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Student ID</label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700"
            type="text"
            placeholder="Student ID"
            value={editingUser ? editingUser.studentId : newUser.studentId}
            onChange={e => editingUser
              ? setEditingUser({ ...editingUser, studentId: e.target.value })
              : setNewUser({ ...newUser, studentId: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700"
            type="email"
            placeholder="Email"
            value={editingUser ? editingUser.email : newUser.email}
            onChange={e => editingUser
              ? setEditingUser({ ...editingUser, email: e.target.value })
              : setNewUser({ ...newUser, email: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Department</label>
          <select
            className="shadow border rounded w-full py-2 px-3 text-gray-700"
            value={editingUser ? editingUser.department : newUser.department}
            onChange={e => editingUser
              ? setEditingUser({ ...editingUser, department: e.target.value })
              : setNewUser({ ...newUser, department: e.target.value })}
            required
          >
            <option value="">Select a department</option>
            {departments.map(dept => (
              <option key={dept.id} value={dept.name}>{dept.name}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >{editingUser ? "Update Student" : "Add New Student"}</button>
          {editingUser && (
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={() => setEditingUser(null)}
            >Cancel</button>
          )}
        </div>
      </form>

      {/* Student List */}
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
        <h2 className="text-xl font-semibold mb-4">Students 📚</h2>
        {students.length > 0 ? (
          <table className="min-w-full border">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Username</th>
                <th className="px-4 py-2 border">ID No</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map(user => (
                <tr key={user.id}>
                  <td className="border px-4 py-2">{user.username}</td>
                  <td className="border px-4 py-2">{user.studentId}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">
                    <button className="text-blue-500 hover:text-blue-700 mr-2" onClick={() => setEditingUser(user)}>
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    <button className="text-red-500 hover:text-red-700" onClick={() => deleteUser(user.id)}>
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No students added yet.</p>
        )}
      </div>
    </div>
  );
}
