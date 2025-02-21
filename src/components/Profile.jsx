import { useState } from "react"; 
import {updateProfile} from '../utils/api'

const ProfileForm = () => {
  const [error,setError]=useState('');
  const [profileData, setProfileData] = useState({
    profilePhoto: null,
    firstName: "",
    lastName: "",
    email: "",
    language: "English",
    phoneNumber: "",
    currentPassword: "",
    newPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      const response= await updateProfile(profileData);
      if (response.error){
        console.error("Error while updating profile", error)
        setError(error.message);
      } else {
          alert("student profile has updated successfully")
          console.log('student profile has updated successfully');
      }
    } catch (error) {
      console.error("updating profile error", error);
      setError("An unexpected error occurred. Please try again.");
    }

  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Profile</h2>
        <h2>{error}</h2>
        <div className="mb-4">
          <label htmlFor="profilePhoto" className="block font-medium">Profile Photo</label>
          <div className="mt-1 flex items-center">
            {profileData.profilePhoto ? (
              <img 
                src={URL.createObjectURL(profileData.profilePhoto)} 
                alt="Profile" 
                className="h-16 w-16 rounded-full mr-4" 
              />
            ) : (
              <div className="bg-gray-200 h-16 w-16 rounded-full mr-4 flex items-center justify-center">
                <span className="text-gray-500">TA</span>
              </div>
            )}
            <input 
              type="file" 
              id="profilePhoto" 
              name="profilePhoto"
              className="hidden" 
              onChange={handleChange} 
            />
            <button 
              type="button" 
              className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded mr-2"
              onClick={() => document.getElementById('profilePhoto').click()}
            >
              Update
            </button>
            <button 
              type="button" 
              className="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded"
              onClick={() => setProfileData({...profileData, profilePhoto: null})} 
            >
              Delete
            </button>
          </div>
          <p className="text-sm text-gray-500">
            This photo will be visible to other learners when you use our Knowledge Q&A platform.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block font-medium">First Name</label>
            <input 
              type="text" 
              id="firstName" 
              name="firstName"
              className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1" 
              value={profileData.firstName} 
              onChange={handleChange} 
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block font-medium">Last Name</label>
            <input 
              type="text" 
              id="lastName" 
              name="lastName"
              className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1" 
              value={profileData.lastName} 
              onChange={handleChange} 
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="email" className="block font-medium">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name='email'
            className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1" 
            value={profileData.email} 
            onChange={handleChange} 
          />
        </div>

        <div className="mt-4">
          <label htmlFor="language" className="block font-medium">Language Preference</label>
          <select 
            id="language" 
            className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1"
            value={profileData.language}
            onChange={handleChange}
            name='language'
          >
            <option value="English">English</option>
            <option value="Amharic">Amharic</option>
          </select>
        </div>

        <div className="mt-4">
          <label htmlFor="phoneNumber" className="block font-medium">Phone Number</label>
          <input 
            type="tel" 
            id="phoneNumber"
            name='phoneNumber' 
            className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1" 
            value={profileData.phoneNumber} 
            onChange={handleChange} 
          />
        </div>

        <div className="mt-6 flex justify-end">
          <button type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded mr-2">
            Cancel
          </button>
          <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
            Save Changes
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-4">
        <h2 className="text-2xl font-semibold mb-4">Password</h2>

        <div className="mb-4">
          <label htmlFor="currentPassword" className="block font-medium">Current Password</label>
          <input 
            type={showPassword ? "text" : "password"} 
            id="currentPassword" 
            className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1" 
            value={profileData.currentPassword} 
            onChange={handleChange} 
          />
        </div>

        <div className="mb-4">
          <label htmlFor="newPassword" className="block font-medium">New Password</label>
          <input 
            type={showPassword ? "text" : "password"} 
            id="newPassword" 
            className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1" 
            value={profileData.newPassword} 
            onChange={handleChange} 
          />
        </div>

        <div className="mb-4">
          <label className="inline-flex items-center">
            <input 
              type="checkbox" 
              className="form-checkbox mr-2" 
              checked={showPassword} 
              onChange={() => setShowPassword(!showPassword)} 
            />
            <span>Show Password</span>
          </label>
        </div>

        <div className="flex justify-end">
          <button type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded mr-2">
            Cancel
          </button>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
            Save Changes
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProfileForm;
