import { FaUsers, FaBook, FaCog, FaChartBar, FaCommentsDollar, FaBroadcastTower, FaLock, FaBell, FaSchool, FaUserGraduate, FaTachometerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", icon: <FaTachometerAlt />, path: "/AdminDashboard" },
  { name: "Student Management", icon: <FaUserGraduate />, path: "/AdminDashboard/student-management" },
  { name: "Instractor Management", icon: <FaUsers />, path: "/AdminDashboard/instructor-management" },
  { name: "Department Management", icon: <FaSchool />, path: "/AdminDashboard/department-management" },
  { name: "Course Management", icon: <FaBook />, path: "/AdminDashboard/course" },
  { name: "Real-Time Features", icon: <FaBroadcastTower />, path: "/AdminDashboard/real-time-features" },
  { name: "Reports & Analytics", icon: <FaChartBar /> , path: "/AdminDashboard/reports-and-analytics"},
  { name: "Security & Authentication", icon: <FaLock /> , path: "/AdminDashboard/security-authentication"},
  { name: "System Settings", icon: <FaCog />, path: "/AdminDashboard/system-settings" },
  { name: "Payment Management", icon: <FaCommentsDollar />, path: "/AdminDashboard/payment-management" },
  { name: "Notifications & Communication", icon: <FaBell />, path: "/AdminDashboard/notifications-and-communication" },
];

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside className="w-64 bg-white shadow-lg p-5">
      <h1 className="text-2xl mb-5">Admin Dashboard</h1>
      <nav>
        {menuItems.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-3 p-3 cursor-pointer rounded-lg transition hover:bg-gray-200"
            onClick={() => navigate(item.path)} 
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}