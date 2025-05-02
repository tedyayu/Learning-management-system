import {useNavigate, useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchEnrolledUsers } from '../../utils/course.api';

const EnrolledUsers = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [enrolledUsers, setEnrolledUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const users = await fetchEnrolledUsers(courseId); 
        console.log("enrolled students for course",users);
        setEnrolledUsers(users);
      } catch (err) {
        setError('Failed to fetch enrolled users');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [courseId]);

  const handleExportUsers = () => {
    console.log('Export users clicked');
    alert('Export functionality will be implemented here.');
  };

  const handleEnrollNewUser = () => {
    navigate(`/AdminDashboard/course/${courseId}/enroll/user-enrollment`);
  };

  return (
    <div className="bg-white rounded-md shadow-md p-6 h-screen">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Enrolled Users</h2>
          <p className="text-gray-600 text-sm">Enrolled users for course ID: {courseId}</p>
        </div>
        <div className="space-x-2">
          <button
            onClick={handleExportUsers}
            className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Export Users
          </button>
          <button
            onClick={handleEnrollNewUser}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            + Enroll
          </button>
        </div>
      </div>

      {loading ? (
        <p>Loading enrolled users...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {enrolledUsers.length > 0 ? (
                enrolledUsers.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.student.firstName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.student.user.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.student.phone}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" colSpan={4}>
                    No users enrolled yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EnrolledUsers;