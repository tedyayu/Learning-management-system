import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Book, Users, Coins, MessageCircle } from 'lucide-react';
import { CourseContext } from '../../context/CourseContext';
import { DepartmentContext } from '../../context/departmentContext';
import { InstractorContext } from '../../context/InstractorContext';
import { StudentContext } from '../../context/StudentContext';

const Dashboard = () => {
  const { courses } = useContext(CourseContext);
  const { departments } = useContext(DepartmentContext);
  const { instractors } = useContext(InstractorContext);
  const { students } = useContext(StudentContext);

  // ✅ Dynamically calculated stats
  const stats = [
    {
      name: 'Courses',
      count: courses?.length || 0,
      icon: <Book className="w-6 h-6" />,
      bg: 'bg-yellow-100',
      iconBg: 'bg-yellow-300'
    },
    {
      name: 'Learners',
      count: students?.length || 0,
      icon: <Users className="w-6 h-6" />,
      bg: 'bg-teal-100',
      iconBg: 'bg-teal-300'
    },
    {
      name: 'Instructors',
      count: instractors?.length || 0,
      icon: <Coins className="w-6 h-6" />,
      bg: 'bg-purple-100',
      iconBg: 'bg-purple-300'
    },
    {
      name: 'Departments',
      count: departments?.length || 0,
      icon: <MessageCircle className="w-6 h-6" />,
      bg: 'bg-green-100',
      iconBg: 'bg-green-300'
    }
  ];

  return (
    <div className="p-6 height-full">
    

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 height-full">
        {stats.map(({ name, count, icon, link, bg, iconBg }) => (
          <Link
            to={link}
            key={name}
            className={`${bg} rounded-lg p-6 min-h-[140px] shadow-lg hover:shadow-2xl transition duration-300`}
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">{name}</h2>
                <p className="text-2xl font-bold">{count}</p>
              </div>
              <div className={`p-3 rounded-full ${iconBg} text-white`}>{icon}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 p-6 bg-red-50 border border-red-200 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold mb-2">Enrolled vs completed</h3>
        <div className="h-40 flex items-center justify-center text-gray-500 italic">
         
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
