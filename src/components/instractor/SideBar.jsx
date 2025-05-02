import {FaBook, FaBell, FaTachometerAlt,FaMoneyBillWave, FaQuestionCircle, FaVideo, FaTasks, FaChalkboardTeacher, FaCertificate, FaChartBar,  FaCog, FaSignOutAlt} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, path: "/InstractorDashboard" },
    { name: "My Courses", icon: <FaBook />, path: "/InstractorDashboard/mycourses" },
    { name: "Announcements", icon: <FaBell />, path: "/InstractorDashboard/announcements" },
    { name: "Withdrawals", icon: <FaMoneyBillWave />, path: "/InstractorDashboard/withdrawals" },
    { name: "Quiz Attempts", icon: <FaQuestionCircle />, path: "/InstractorDashboard/quiz-attempts" },
    { name: "Google Meet", icon: <FaVideo />, path: "/InstractorDashboard/google-meet" },
    { name: "Assignments", icon: <FaTasks />, path: "/InstractorDashboard/assignments" },
    { name: "Zoom", icon: <FaChalkboardTeacher />, path: "/InstractorDashboard/zoom" },
    { name: "Analytics", icon: <FaChartBar />, path: "/InstractorDashboard/analytics" },
    { name: "Settings", icon: <FaCog />, path: "/InstractorDashboard/settings" },
    { name: "Logout", icon: <FaSignOutAlt />, path: "/logout" },
  ];


export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside className="w-64 bg-white shadow-lg p-5">
      <h1 className="text-2xl mb-5">Instractor Dashboard</h1>
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
