import { FaUsers, FaBook, FaFileAlt, FaUserShield, FaCog, FaChartBar, FaCommentsDollar, FaBroadcastTower, FaLock, FaBell ,FaSchool,FaUserGraduate} from "react-icons/fa";

const menuItems = [
  { name: "Student Management", icon: < FaUserGraduate /> },
  { name: "Instractor Management", icon: < FaUsers/> },
  {name: "Department Management", icon: <FaSchool />},
  { name: "Course Management", icon: <FaBook /> },
  { name: "Content Management", icon: <FaFileAlt /> },
  { name: "Enrollment & Access", icon: <FaUserShield /> },
  { name: "Assessment & Grading", icon: <FaChartBar /> },
  { name: "Real-Time Features", icon: <FaBroadcastTower /> },
  { name: "Reports & Analytics", icon: <FaChartBar /> },
  { name: "Security & Authentication", icon: <FaLock /> },
  { name: "System Settings", icon: <FaCog /> },
  { name: "Payment Management", icon: <FaCommentsDollar /> },
  { name: "Notifications & Communication", icon: <FaBell /> }
];

export default function Sidebar({ activeMenu, setActiveMenu }) {
  return (
    <aside className="w-64 bg-white shadow-lg p-5">
      <h1 className="text-2xl font-bold mb-5">Admin Dashboard</h1>
      <nav>
        {menuItems.map((item) => (
          <div
            key={item.name}
            className={`flex items-center gap-3 p-3 cursor-pointer rounded-lg transition hover:bg-gray-200 ${
              activeMenu === item.name ? "bg-gray-300" : ""
            }`}
            onClick={() => setActiveMenu(item.name)}
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}
