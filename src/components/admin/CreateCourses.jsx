import { useState, useContext } from 'react';
import { DepartmentContext } from '../../context/departmentContext'; 
import {createCourse} from '../../utils/course.api';
import { supabase } from '../../utils/SupabaseClient';

const CreateCourses = ({ onClose }) => {
  const { departments } = useContext(DepartmentContext); 

  const [formData, setFormData] = useState({
    courseName: '',
    shortDescription: '',
    courseImage:null,
    credits:'',
    department:'',
    courseCode:'',
    status: 'Published',
    createdBy: 'Admin',
    createdDate: new Date().toISOString().split('T')[0],
    language: 'All',
    access: 'Public',
    image: null,
    syllabus: '',
    startDate: '',
    endDate: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

 const handleImageUpload = (e) => {
  const file = e.target.files[0];
  setFormData({
    ...formData,
    image: file ? URL.createObjectURL(file) : null,
    courseImage: file,
  });
};
  const uploadImageToSupabase = async (file) => {
    const fileName = `${Date.now()}_${file.name}`;
    console.log("Uploading file:", fileName);
    const { data, error } = await supabase.storage
      .from('photos')
      .upload(fileName, file);
  
    if (error) {
      console.error("Error uploading image", error);
      throw error;
    }
  
    const { data: urlData } = await supabase.storage
      .from('photos')
      .getPublicUrl(fileName);
    const publicUrl = urlData.publicUrl;
    console.log("Image uploaded successfully", publicUrl);
    return publicUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let coursePhotoUrl= formData.courseImage;
      if (formData.courseImage instanceof File) {
        coursePhotoUrl = await uploadImageToSupabase(formData.courseImage);
      }

      const updatedData={
        ...formData,
        courseImage: coursePhotoUrl,
      }
      const response = await createCourse(updatedData);
      if (response.status === 200) {
        alert('Course created successfully!');
      }
      else {
        console.error('Failed to create course:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating course:', error);
      alert('Failed to create the course. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Courses: Create Item</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Course Name *</label>
            <input
              type="text"
              name="courseName"
              value={formData.courseName}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Department</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
             <option value="">Select a department</option>
             {departments.map((department) => (
              <option key={department.id} value={department.id}>
                {department.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">End Date</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
        </div>
        {/* Short Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Short Description</label>
          <input
            type="text"
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter short description here..."
          />
        </div>

        {/* Level, Regular Price, Sale Price */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              step="0.01"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Credit</label>
            <input
              type="number"
              name="credits"
              value={formData.credits}
              onChange={handleChange}
              step="0.01"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="Published">Published</option>
              <option value="Unpublished">Unpublished</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Created By</label>
            <input
              type="text"
              name="createdBy"
              value={formData.createdBy}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              disabled
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Created Date</label>
            <input
              type="date"
              name="createdDate"
              value={formData.createdDate}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              disabled
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Language</label>
            <select
              name="language"
              value={formData.language}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="All">All</option>
              <option value="English">English</option>
              <option value="French">Amharic</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Access</label>
            <select
              name="access"
              value={formData.access}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="Public">Public</option>
              <option value="Registered">For students</option>
              <option value="Special">Special</option>
            </select>
          </div>
        </div>

        {/* Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
          />
          {formData.image && (
            <img src={formData.image} alt="Preview" className="mt-2 h-20 w-auto object-cover rounded" />
          )}
        </div>


        {/* Save Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save & Close
          </button>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCourses;