import { useState , useEffect} from "react";
import { PencilIcon, TrashIcon } from "lucide-react";
import {registerInstractor, getInstarctor} from '../../utils/instractor.api'


export default function RegisterInstarctorPage() { 
 
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({ username: "", password: "",ID_NO:"",email:"",role:"instractor"});
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState("");
  const [instractors, setInstractors] = useState([]);

  useEffect(() => {
    const fetchInstractor = async () => {
      try {
        const data = await getInstarctor();
        setInstractors(data);       
      } catch (error) {
        console.error('There was an error fetching the Instractors!', error);
      } 
    };

    fetchInstractor();
  }, []);
  


  const addUser = async (e) => {
    e.preventDefault();
    setError("");
    
    try {
      
      console.log("Sending request:", newUser);
      const response = await registerInstractor(newUser)

      
      if(response.error){
        setError(response.error.message);
        console.error("response error", response.error)
      }else{
        alert("new Instractor added")
        setUsers([...users, { ...newUser, id: users.length + 1 }]);
        setNewUser({ username: "", password: "",ID_NO:"",email:"",role:"instractor" });
      }

    } catch (error) {
      setError("Error registering user");
      console.error("error registering user", error);
    }
  };

   

  const updateUser = (e) => {
    e.preventDefault()
    setUsers(users.map(user => (user.id === editingUser.id ? editingUser : user)));
    setEditingUser(null);
  };

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleSearch = () => {
    const filteredUsers = users.filter(
      user => user.username.includes(searchQuery)
    );
    setSearchResults(filteredUsers);
  };
  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Register Instractor</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">Search Instractor</h2>
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
      {searchResults.length > 0 && (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl font-semibold mb-4">Search Results</h2>
          <ul>
            {searchResults.map(user => (
              <>
                
                <table className="min-w-full border">
                  <thead>
                    <tr>
                      
                      <th className="px-4 py-2 border">Instractor Name</th>
                      <th className="px-4 py-2 border">Email</th>
                      <th className="px-4 py-2 border">Id No</th>
                      <th className="px-4 py-2 border">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                      <tr key={user.id}>
                        
                        <td className="border px-4 py-2">{user.username}</td>
                        <td className="border px-4 py-2">{user.email}</td>
                        <td className="border px-4 py-2">{user.ID_NO}</td>
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
              </>
            ))}
          </ul>
        </div>
        
      )}
      {/* Add/Edit User Form */}
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={editingUser ? updateUser : addUser}>
        <h2 className="text-xl font-semibold mb-4">{editingUser ? "Edit User" : "Add New Instractor"}</h2>
        <h1 className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">{error}</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            type="text"
            placeholder="Username"
            value={editingUser ? editingUser.username : newUser.username}
            onChange={e =>
              editingUser? setEditingUser({ ...editingUser, username: e.target.value })
                : setNewUser({ ...newUser, username: e.target.value })
            }
          required/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            type="password"
            placeholder="Password"
            value={editingUser ? editingUser.password : newUser.password}
            onChange={e =>
              editingUser
                ? setEditingUser({ ...editingUser, password: e.target.value })
                : setNewUser({ ...newUser, password: e.target.value })
            }
          required/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">ID_NO</label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            type="text"
            placeholder="ID_NO"
            value={editingUser ? editingUser.ID_NO : newUser.ID_NO}
            onChange={e =>
              editingUser
                ? setEditingUser({ ...editingUser, ID_NO: e.target.value })
                : setNewUser({ ...newUser, ID_NO: e.target.value })
            }
          required/>
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
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Role</label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            type="text"
            placeholder="Role"
            value={newUser.role}
            readOnly
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={editingUser ? updateUser : addUser}
            type="submit"
          >
            {editingUser ? "Update Instractor Information" : "Add New Instractor"}
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

      

      {/* Instructor List */}
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h2 className="text-xl font-semibold mb-4">Instructors 🎓</h2>
        {instractors.length > 0 ? (
          <table className="min-w-full border">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Username</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">ID_NO</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {instractors.map(instractor => (
                <tr key={instractor.id}>
                  <td className="border px-4 py-2">{instractor.firstName}</td>
                  <td className="border px-4 py-2">{instractor.email}</td>
                  <td className="border px-4 py-2">{instractor.instructorId}</td>
                  <td className="border px-4 py-2">
                    <button className="text-blue-500 hover:text-blue-700 mr-2" onClick={() => setEditingUser(instractor)}>
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    <button className="text-red-500 hover:text-red-700" onClick={() => deleteUser(instractor.id)}>
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No instructors added yet.</p>
        )}
      </div>
    </div>
  );
  }
