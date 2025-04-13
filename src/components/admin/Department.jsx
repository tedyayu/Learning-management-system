import { useState , useContext} from 'react';
import {  createDepartment ,fetchDepartementByTerm,deleteDepartment,updateDepartment,publishDepartment, unPublishDepartment} from '../../utils/departement.api'
import { DepartmentContext } from "../../context/departmentContext";


const Department = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newDepartment, setNewDepartment] = useState({ name: '', lead: '', description: '', email: '', location: '' });
  const [editIndex, setEditIndex] = useState(null);
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const { departments,setDepartments } = useContext(DepartmentContext);



  // Handle input changes for new department form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDepartment({ ...newDepartment, [name]: value });
  };

  // Handle form submission to create or edit a department
  const handleCreateDepartment = async (e) => {
    e.preventDefault();
    if (!newDepartment.name || !newDepartment.lead) {
      alert('Please fill in both Department Name and Lead Name.');
      return;
    }
    if (editIndex !== null) {
      try {
        const department = await updateDepartment(departments[editIndex].id, newDepartment);

       const newUpdatedDepartment=department.updatedDepartment;
        console.log(newUpdatedDepartment);
        // Fix the map logic to correctly replace the old department with the updated one
        const updatedDepartments = departments.map((dept) =>
          dept.id === newUpdatedDepartment.id ? newUpdatedDepartment : dept
        );
        setDepartments(updatedDepartments);
  
        alert('Department updated successfully!');

      } catch (error) {
        console.error('There was an error updating the department!', error);
      }
      setEditIndex(null);
    } else {
      try {
        const data = await createDepartment(newDepartment);
        console.log(data);
        setDepartments([...departments, data]);
        alert('Department created successfully!');

      } catch (error) {
        console.error('There was an error creating the department!', error);
      }
    }
    setNewDepartment({ name: '', lead: '', description: '', email: '', location: '' });
    setShowCreateForm(false);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    
  };
  const searchDepartment = async () => {
    try {
      const department = await fetchDepartementByTerm(searchTerm);
    
      setSearchResults([department]);
      console.log(searchResults);
      
    } catch (error) {
      console.error('There was an error searching the department!', error);
    }
  };



  const handleNewButtonClick = () => {
    setNewDepartment({ name: '', lead: '', description: '', email: '', location: '' });
    setEditIndex(null);
    setShowCreateForm(true);
  };

  const handleEditButtonClick = (index) => {
    setNewDepartment(departments[index]);
    setEditIndex(index);
    setShowCreateForm(true);
  };

  const handleDeleteButtonClick = async (index, id) => {
    try {
      await deleteDepartment(id);
      const updatedDepartments = departments.filter((_, i) => i !== index);
      setDepartments(updatedDepartments);
      alert("Department deleted successfully!");
    } catch (error) {
      console.error('There was an error deleting the department!', error);
    }
 };
 const handleCheckboxChange = (id) => {
  setSelectedDepartments((prevSelected) => {
    if (prevSelected.includes(id)) {
      // If the ID is already in the array, remove it
      return prevSelected.filter((selectedId) => selectedId !== id);
    } else {
      // If the ID is not in the array, add it
      return [...prevSelected, id];
    }
  });
};

  const handlePublishButtonClick = async () => {
    try {
      for (const id of selectedDepartments) {
        const updatedDepartment = await publishDepartment(id); // Get the updated department object
        setDepartments((prevDepartments) =>
          prevDepartments.map((dept) =>
            dept.id === updatedDepartment.id ? updatedDepartment : dept
          )
        );
      }
     
  
      alert('Departments published successfully!');
      setSelectedDepartments([]); // Clear the selection
    } catch (error) {
      console.error('There was an error publishing the departments!', error);
      alert('Failed to publish some departments. Please try again.');
    }

  };

  const handleUnpublishButtonClick =async  () => {
    try {
      for (const id of selectedDepartments) {
        await unPublishDepartment(id);
      }
      alert('Departments unpublished successfully!');
    } catch (error) {
      console.error('There was an error unpublishing the department!', error);
      alert('Failed to unpublish the department. Please try again.');
    }

  };

  const handleArchiveButtonClick = () => {
    const updatedDepartments = departments.map((dept, index) => {
      if (selectedDepartments.includes(index)) {
        return { ...dept, status: 'Archived' };
      }
      return dept;
    });
    setDepartments(updatedDepartments);
  };

  const handleCheckInButtonClick = () => {
    const updatedDepartments = departments.map((dept, index) => {
      if (selectedDepartments.includes(index)) {
        return { ...dept, status: 'Checked-in' };
      }
      return dept;
    });
    setDepartments(updatedDepartments);
  };

  const handleTrashButtonClick = () => {
    const updatedDepartments = departments.map((dept, index) => {
      if (selectedDepartments.includes(index)) {
        return { ...dept, status: 'Trashed' };
      }
      return dept;
    });
    setDepartments(updatedDepartments);
  };



  return (
    <div className="flex-1 p-6">
      <div className="bg-white rounded-lg shadow-md p-4">
        <h1 className="text-xl font-semibold mb-4 text-gray-800">Departments and Schools</h1>

        {/* Action Buttons */}
        <div className="flex space-x-2 mb-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={handleNewButtonClick}>
            + New
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300" onClick={handlePublishButtonClick}>
            Publish
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300" onClick={handleUnpublishButtonClick}>
            Unpublish
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300" onClick={handleArchiveButtonClick}>
            Archive
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300" onClick={handleCheckInButtonClick}>
            Check-in
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300" onClick={handleTrashButtonClick}>
            Trash
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-4 flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="border rounded px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300" onClick={searchDepartment}>
            Search
          </button>
          <select className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Search Tools</option>
            {/* Add more options as needed */}
          </select>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
            Clear
          </button>
        </div>

        {/* Search Results */}
        {searchResults && searchResults.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Search Results</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2">Select</th>
                  <th className="border p-2">Department Name</th>
                  <th className="border p-2">Lead Name</th>
                  <th className="border p-2">Description</th>
                  <th className="border p-2">Email</th>
                  <th className="border p-2">Location</th>
                  <th className="border p-2">Published</th>
                  <th className="border p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((dept, index) => (
                  <tr key={dept.id} className={dept.id % 2 === 0 ? 'bg-gray-100' : ''}>
                    <td className="border p-2">
                      <input
                        type="checkbox"
                        checked={selectedDepartments.includes(dept.id)}
                        onChange={() => handleCheckboxChange(dept.id)}
                      />
                    </td>
                    <td className="border p-2">{dept.name}</td>
                    <td className="border p-2">{dept.lead}</td>
                    <td className="border p-2">{dept.description}</td>
                    <td className="border p-2">{dept.email}</td>
                    <td className="border p-2">{dept.location}</td>
                    <td className="border p-2">{dept.published? 'Yes' : 'No'}</td>
                    <td className="border p-2">
                      <button
                        className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mr-2"
                        onClick={() => handleEditButtonClick(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                        onClick={() => handleDeleteButtonClick(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Department List */}
        <h2 className="text-lg font-semibold mb-4 text-gray-800">All Departments</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Select</th>
              <th className="border p-2">Department Name</th>
              <th className="border p-2">Lead Name</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Location</th>
              <th className="border p-2">Published</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {departments && departments.length > 0 ? (
              departments.map((dept, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                  <td className="border p-2">
                    <input
                      type="checkbox"
                      checked={selectedDepartments.includes(dept.id)}
                      onChange={() => handleCheckboxChange(dept.id)}
                    />
                  </td>
                  <td className="border p-2">{dept.name}</td>
                  <td className="border p-2">{dept.lead}</td>
                  <td className="border p-2">{dept.description}</td>
                  <td className="border p-2">{dept.email}</td>
                  <td className="border p-2">{dept.location}</td>
                  <td className="border p-2">{dept.published?  'Yes' : 'No'}</td>
                  <td className="border p-2">
                    <button
                      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mr-2"
                      onClick={() => handleEditButtonClick(index, dept.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      onClick={() => handleDeleteButtonClick(index, dept.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="border p-2 text-center">
                  No Matching Results
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* No Matching Results */}
        {departments.length === 0 && (
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded text-gray-700">
            No Matching Results
          </div>
        )}
      </div>

      {/* Modal for Creating or Editing Department */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">{editIndex !== null ? 'Edit Department' : 'Create New Department'}</h2>
            <form onSubmit={handleCreateDepartment}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Department Name</label>
                <input
                  type="text"
                  name="name"
                  value={newDepartment.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Lead Name</label>
                <input
                  type="text"
                  name="lead"
                  value={newDepartment.lead}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Department Description</label>
                <input
                  type="text"
                  name="description"
                  value={newDepartment.description}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Department Email</label>
                <input
                  type="email"
                  name="email"
                  value={newDepartment.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  value={newDepartment.location}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-2 bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
                  onClick={() => setShowCreateForm(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Department;