import { useState, useContext } from "react";
import { FaBell } from "react-icons/fa";
import { submitAnnouncement , updateAnnouncement} from "../../utils/api";
import { AnnouncementContext } from "../../context/AnnouncmentContext";


const AdminAnnouncements = () => {
  const { announcements, setAnnouncements } = useContext(AnnouncementContext);

  const [formAnnouncement, setFormAnnouncement] = useState({
    title: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormAnnouncement((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitAnnouncement = async (e) => {
    e.preventDefault();
    if (formAnnouncement.title && formAnnouncement.message) {
      setLoading(true);
      try {
        if (editId) {
          const updated = await updateAnnouncement(editId, {
          title: formAnnouncement.title,
          message: formAnnouncement.message,
        });

        setAnnouncements((prev) =>
          prev.map((a) =>
            a.id === editId ? updated : a
          )
        );
          setEditId(null);
          alert("Announcement updated!");
        } else {
          // Create new announcement
          const response = await submitAnnouncement(formAnnouncement);
          setAnnouncements((prev) => [
            {
              id: response?.id || Date.now(),
              title: formAnnouncement.title,
              message: formAnnouncement.message,
              date: new Date().toLocaleString(),
            },
            ...prev,
          ]);
          alert("Announcement created!");
        }
        setFormAnnouncement({ title: "", message: "" });
      } catch (error) {
        alert("Failed to post announcement.");
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please enter a title and message for the announcement.");
    }
  };

  const handleDeleteAnnouncement = (id) => {
    setAnnouncements((prev) => prev.filter((a) => a.id !== id));
    // If deleting the one being edited, reset form
    if (editId === id) {
      setEditId(null);
      setFormAnnouncement({ title: "", message: "" });
    }
  };

  // Start editing: load values into the form
  const handleEditAnnouncement = (announcement) => {
    setEditId(announcement.id);
    setFormAnnouncement({
      title: announcement.title,
      message: announcement.content,
    });
  };

  // Cancel edit
  const handleCancelEdit = () => {
    setEditId(null);
    setFormAnnouncement({ title: "", message: "" });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      <div className="flex flex-col gap-6 mb-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FaBell className="text-blue-500 text-2xl mr-2" />
            <h2 className="text-2xl font-semibold">
              {editId ? "Edit Announcement" : "Create Announcement"}
            </h2>
          </div>
        </div>

        <form
          onSubmit={handleSubmitAnnouncement}
          className="bg-gray-50 p-4 rounded-lg shadow-inner"
        >
          <h3 className="text-lg font-semibold mb-4">
            {editId ? "Edit Announcement" : "Announcement for All"}
          </h3>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formAnnouncement.title}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter announcement title"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              value={formAnnouncement.message}
              onChange={handleInputChange}
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your announcement here..."
            ></textarea>
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
            >
              {loading
                ? "Submitting..."
                : editId
                ? "Update Announcement"
                : "Submit Announcement"}
            </button>
            {editId && (
              <button
                type="button"
                onClick={handleCancelEdit}
                className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition-colors duration-200"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left text-gray-600 font-medium">Title</th>
              <th className="py-3 px-4 text-left text-gray-600 font-medium">Message</th>
              <th className="py-3 px-4 text-left text-gray-600 font-medium">Date</th>
              <th className="py-3 px-4 text-left text-gray-600 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {announcements.map((announcement) => (
              <tr key={announcement.id} className="border-t">
                <td className="py-3 px-4">{announcement.title}</td>
                <td className="py-3 px-4">{announcement.message}</td>
                <td className="py-3 px-4">{announcement.date}</td>
                <td className="py-3 px-4 flex gap-2">
                  <button
                    onClick={() => handleEditAnnouncement(announcement)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteAnnouncement(announcement.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {announcements.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No announcements yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAnnouncements;