import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { AnnouncementContext } from '../../context/AnnouncmentContext';
import SiteNews from "../../components/SiteNews";
import { Book, Users, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const MyDashboard = () => {
  const { user } = useContext(AuthContext);
  const { announcements } = useContext(AnnouncementContext);

  const totalCourses = user?.instructor?.Courses?.length || 0;

  const totalLearners = user?.instructor?.Courses?.reduce(
    (acc, course) => acc + (course.enrollments?.length || 0),
    0
  );

  const stats = [
    {
      name: 'Course',
      count: totalCourses,
      icon: <Book className="w-6 h-6" />,
      link: '/courses',
      bg: 'bg-yellow-100',
      iconBg: 'bg-yellow-300',
    },
    {
      name: 'Learners',
      count: totalLearners,
      icon: <Users className="w-6 h-6" />,
      link: '/learners',
      bg: 'bg-teal-100',
      iconBg: 'bg-teal-300',
    },
    {
      name: 'Message',
      count: 0,
      icon: <MessageCircle className="w-6 h-6" />,
      link: '/messages',
      bg: 'bg-green-100',
      iconBg: 'bg-green-300',
    },
  ];

  return (
    <div className="flex min-h-screen bg-white flex-col">
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-4xl font-thin">
            Welcome Instructor {user?.username},
          </h1>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-300 mb-6 min-h-[400px]">
              <h2 className="text-lg font-semibold mb-4">Courses Progress</h2>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {stats.map(({ name, count, icon, link, bg, iconBg }) => (
                  <Link
                    key={name}
                    className={`${bg} rounded-lg p-6 min-h-[140px] shadow-lg hover:shadow-2xl transition duration-300`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="text-lg font-semibold">{name}</h2>
                        <p className="text-2xl font-bold">{count}</p>
                      </div>
                      <div className={`p-3 rounded-full ${iconBg} text-white`}>
                        {icon}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                {user?.instractor?.Courses?.map((course, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="relative w-24 h-24">
                      <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#E5E7EB"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#3B82F6"
                          strokeWidth="3"
                          strokeDasharray={`${course.progress || 0}, 100`}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold">
                        {course.progress || 0}%
                      </div>
                    </div>
                    <p className="mt-2 text-sm font-medium">{course.name}</p>
                    <p className="text-xs text-gray-500">
                      {course.classes || 0} Classes
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="announcement-component border border-gray-300 bg-white max-w-x5 p-6 rounded-lg mb-6 min-h-[400px] overflow-y-auto">
              <h3 className="text-lg font-semibold mb-2">
                Latest Announcements
              </h3>
              <ul>
                {announcements?.map((announcement, index) => (
                  <li key={index} className="mb-4">
                    <p className="text-sm text-gray-500">
                      {announcement.createdAt}
                    </p>
                    <p className="font-medium">E-learning Administrator</p>
                    <p className="text-blue-600 hover:underline">
                      {announcement.title}
                    </p>
                  </li>
                ))}
              </ul>
              
            </div>
          </div>
        </div>

        <div className="mt-10 flex">
          <div className="bg-white p-6 border border-gray-300 rounded-lg mb-6">
            <SiteNews />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDashboard;
