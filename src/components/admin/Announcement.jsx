import  { useState } from "react";
import { FaBell } from "react-icons/fa";

const AdminAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      course: "Live Q&A Session Next Week - PHP Master",
      sortBy: "D15C",
      date: "November 1, 2022, 10:07 am",
    },
    {
      id: 2,
      course: "Midterm Starts in 2 Weeks!",
      sortBy: "NUMM4_wyyy",
      date: "November 7, 2022, 9:50 am",
    },
    {
      id: 3,
      course: "Welcome! Nutrition - Build Your Perfect Diet & More!",
      sortBy: "D15C",
      date: "October 25, 2022, 9:00 am",
    },
  ]);

  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);


  const handleAddAnnouncementForAll = () => {
    // Logic to create a new announcement for all students
    alert("Create a new announcement for all students!");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAnnouncement((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

    const handleSubmitAnnouncement = async (e) => {
    e.preventDefault();
    if (newAnnouncement.title && newAnnouncement.message) {
      setLoading(true);
      try {
        // Replace with your actual backend API endpoint
        const response = await submitAnnouncement(newAnnouncement);
        // Optionally update the local state with the new announcement
        setAnnouncements((prev) => [
          {
            id: response.data?.id || Date.now(),
            course: newAnnouncement.course || "All Courses",
            sortBy: "NEW",
            date: new Date().toLocaleString(),
          },
          ...prev,
        ]);
        alert("Announcement created!");
        setNewAnnouncement({ title: "", course: "", message: "" });
      } catch (error) {
        alert("Failed to post announcement.");
      }
      setLoading(false);
    } else {
      alert("Please enter a title and message for the announcement.");
    }
  };

  const handleDeleteAnnouncement = (id) => {
    setAnnouncements(announcements.filter((ann) => ann.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      <div className="flex flex-col gap-6 mb-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FaBell className="text-blue-500 text-2xl mr-2" />
            <h2 className="text-2xl font-semibold">Create Announcement</h2>
          </div>
          <button
            onClick={handleAddAnnouncementForAll}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
          >
            Add New Announcement
          </button>
        </div>

        {/* Create Announcement Form for Specific Course */}
        <form onSubmit={handleSubmitAnnouncement} className="bg-gray-50 p-4 rounded-lg shadow-inner">
          <h3 className="text-lg font-semibold mb-4">Create Announcement for All</h3>
          
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Announcement Message
            </label>
            <textarea
              id="message"
              name="message"
              value={newAnnouncement.message}
              onChange={handleInputChange}
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your announcement here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
          >
            Submit Announcement
          </button>
        </form>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left text-gray-600 font-medium">Course</th>
              <th className="py-3 px-4 text-left text-gray-600 font-medium">Sort by</th>
              <th className="py-3 px-4 text-left text-gray-600 font-medium">Date</th>
              <th className="py-3 px-4 text-left text-gray-600 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {announcements.map((announcement) => (
              <tr key={announcement.id} className="border-t">
                <td className="py-3 px-4 text-gray-800">{announcement.course}</td>
                <td className="py-3 px-4 text-gray-800">{announcement.sortBy}</td>
                <td className="py-3 px-4 text-gray-800">{announcement.date}</td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => handleDeleteAnnouncement(announcement.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors duration-200 text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAnnouncements;