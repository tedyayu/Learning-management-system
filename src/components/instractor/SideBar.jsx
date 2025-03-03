
import {
  FaBook, // My Courses
  FaBell, // Announcements
  FaMoneyBillWave, // Withdrawals
  FaQuestionCircle, // Quiz Attempts
  FaVideo, // Google Meet
  FaTasks, // Assignments
  FaChalkboardTeacher, // Zoom
  FaCertificate, // Certificate
  FaChartBar, // Analytics
  FaCog, // Settings
  FaSignOutAlt, // Logout
} from "react-icons/fa";

const menuItems = [
  { name: "Course Category", icon: <FaBook />, path: "/courseCategory" },
    { name: "My Courses", icon: <FaBook />, path: "/mycourses" },
    { name: "Announcements", icon: <FaBell />, path: "/announcements" },
    { name: "Withdrawals", icon: <FaMoneyBillWave />, path: "/withdrawals" },
    { name: "Quiz Attempts", icon: <FaQuestionCircle />, path: "/quiz-attempts" },
    { name: "Google Meet", icon: <FaVideo />, path: "/google-meet" },
    { name: "Assignments", icon: <FaTasks />, path: "/assignments" },
    { name: "Zoom", icon: <FaChalkboardTeacher />, path: "/zoom" },
    { name: "Certificate", icon: <FaCertificate />, path: "/certificate" },
    { name: "Analytics", icon: <FaChartBar />, path: "/analytics" },
    { name: "Settings", icon: <FaCog />, path: "/settings" },
    { name: "Logout", icon: <FaSignOutAlt />, path: "/logout" },
  ];


export default function Sidebar({ activeMenu, setActiveMenu }) {
    return (
      <aside className="w-64 bg-white shadow-lg p-5">
        
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
