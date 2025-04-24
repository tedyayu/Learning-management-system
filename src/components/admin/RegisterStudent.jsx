import { useState, useEffect, useContext } from "react";
import { PencilIcon, TrashIcon } from "lucide-react";
import { registerStudent, searchUsers } from '../../utils/api';
import {StudentContext} from "../../context/StudentContext"

export default function RegisterStudent() { 
  const { students, setStudents } = useContext(StudentContext);
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({ username: "", password: "", ID_NO: "", email: "" });
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState("");

  

  useEffect(() => {
    console.log("Search results updated:", searchResults);
  }, [searchResults]);

  const addUser = async (e) => {
    e.preventDefault();
    setError("");

    try {
      console.log("Sending request:", newUser);
      const response = await registerStudent(newUser);

      if (response.error) {
        setError(response.error.message);
        console.error("response error", response.error);
      } else {
        alert("new user added");
        setStudents([...students, { ...newUser, id: students.length + 1 }]);
        setNewUser({ username: "", password: "", ID_NO: "", email: "" });
      }
    } catch (error) {
      setError("Error registering user");
      console.error("error registering user", error);
    }
  };

  const updateUser = (e) => {
    e.preventDefault();
    setStudents(students.map(user => (user.id === editingUser.id ? editingUser : user)));
    setEditingUser(null);
  };

  const deleteUser = id => {
    setStudents(students.filter(user => user.id !== id));
  };

  const handleSearch = async () => {
    console.log("Searching for:", searchQuery); 
    try {
      const response = await searchUsers(searchQuery);
      setSearchResults([response]);
      console.log("Search results:", response);
      console.log("is array?:", searchResults instanceof Array);
      console.log("Search results Array:", searchResults.map(user => user.username));
    } catch (error) {
      console.error("Error searching users:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl  font-semibold text-gray-900 mb-4">Register Student</h1>

      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">Search Student</h2>
        <div className="flex gap-4 mb-4">
          <input
            className="shadow border rounded py-2 px-3 text-gray-700"
            type="text"
            placeholder="Enter username"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      {searchResults.length > 0 ? (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl font-semibold mb-4">Search Results</h2>
          <ul>
            {searchResults.map(user => (
              <table className="min-w-full border" key={user.id}>
                <thead>
                  <tr>
                    <th className="px-4 py-2 border">Username</th>
                    <th className="px-4 py-2 border">ID No</th>
                    <th className="px-4 py-2 border">Email</th>
                    <th className="px-4 py-2 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">{user.student.firstName}</td>
                    <td className="border px-4 py-2">{user.student.studentId}</td>
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
                </tbody>
              </table>
            ))}
          </ul>
        </div>
      ) : (
        <p>No search results found.</p>
      )}
      {/* Add/Edit User Form */}
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={editingUser ? updateUser : addUser}>
        <h2 className="text-xl font-semibold mb-4">{editingUser ? "Edit Student Information" : "Add New Student"}</h2>
        <h1 className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">{error}</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            type="text"
            placeholder="Username"
            value={editingUser ? editingUser.firstName : newUser.firstName}
            onChange={e =>
              editingUser ? setEditingUser({ ...editingUser, username: e.target.value })
                : setNewUser({ ...newUser, username: e.target.value })
            }
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            type="password"
            placeholder="Password"
            value={editingUser ? editingUser.password : newUser.password}
            onChange={e =>
              editingUser ? setEditingUser({ ...editingUser, password: e.target.value })
                : setNewUser({ ...newUser, password: e.target.value })
            }
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">ID_NO</label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            type="text"
            placeholder="ID_NO"
            value={editingUser ? editingUser.studentID : newUser.studentID}
            onChange={e =>
              editingUser ? setEditingUser({ ...editingUser, ID_NO: e.target.value })
                : setNewUser({ ...newUser, ID_NO: e.target.value })
            }
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            type="email"
            placeholder="Email"
            value={editingUser ? editingUser.email : newUser.email}
            onChange={e =>
              editingUser ? setEditingUser({ ...editingUser, email: e.target.value })
                : setNewUser({ ...newUser, email: e.target.value })
            }
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            {editingUser ? "Update Student" : "Add New Student"}
          </button>
          {editingUser && (
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setEditingUser(null)}
              type="button"
            >
              Cancel
            </button>
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
                  <td className="border px-4 py-2">{user.student.firstName}</td>
                  <td className="border px-4 py-2">{user.student.studentId}</td>
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