import { Link } from 'react-router-dom';
import { Book, Users, Coins, MessageCircle } from 'lucide-react';

const stats = [
  { name: 'Course', count: 0, icon: <Book className="w-6 h-6" />, link: '/courses', bg: 'bg-yellow-100', iconBg: 'bg-yellow-300' },
  { name: 'Learners', count: 1, icon: <Users className="w-6 h-6" />, link: '/learners', bg: 'bg-teal-100', iconBg: 'bg-teal-300' },
  { name: 'Amount', count: 0, icon: <Coins className="w-6 h-6" />, link: '/amount', bg: 'bg-purple-100', iconBg: 'bg-purple-300' },
  { name: 'Message', count: 0, icon: <MessageCircle className="w-6 h-6" />, link: '/messages', bg: 'bg-green-100', iconBg: 'bg-green-300' },
];

const Dashboard = () => {
  return (
    <div className="p-6">
        <h1 className="text-2xl mb-5">Admin Dashboard</h1>
      <p className="text-gray-600 mb-6">Analyzing large datasets to identify trends, patterns, and insights that can inform decision-making</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map(({ name, count, icon, link, bg, iconBg }) => (
          <Link to={link} key={name}   className={`${bg} rounded-l p-8 min-h-[160px] shadow-lg hover:shadow-2xl transition duration-300`}
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

      <div className="mt-10 p-6 bg-red-50 border border-red-200 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold mb-2">Enrolled vs completed</h3>
        <div className="h-40 flex items-center justify-center text-gray-500 italic">
          {/* Placeholder for chart */}
          Chart will be displayed here
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
