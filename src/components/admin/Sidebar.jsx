import { useState } from "react";
import { FaUsers, FaBook, FaUserShield, FaCog, FaChartBar, FaCommentsDollar, FaBroadcastTower, FaLock, FaBell, FaSchool, FaUserGraduate, FaTachometerAlt } from "react-icons/fa";

const menuItems = [
  { name: "Dashboard", icon: <FaTachometerAlt /> },
  { name: "Student Management", icon: <FaUserGraduate /> },
  { name: "Instractor Management", icon: <FaUsers /> },
  { name: "Department Management", icon: <FaSchool /> },
  {
    name: "Course",
    icon: <FaBook />,
    subItems: [
      { name: "Course Management" },
      { name: "Course Setting" },
    ],
  },
  { name: "Enrollment and Acess", icon: <FaUserShield /> },
  { name: "Assessment & Grading", icon: <FaChartBar /> },
  { name: "Real-Time Features", icon: <FaBroadcastTower /> },
  { name: "Reports & Analytics", icon: <FaChartBar /> },
  { name: "Security & Authentication", icon: <FaLock /> },
  { name: "System Settings", icon: <FaCog /> },
  { name: "Payment Management", icon: <FaCommentsDollar /> },
  { name: "Notifications & Communication", icon: <FaBell /> },
];

export default function Sidebar({ activeMenu, setActiveMenu }) {
  const [expandedMenu, setExpandedMenu] = useState(null);

  const handleMenuClick = (menuName, hasSubItems) => {
    if (hasSubItems) {
      // Toggle submenu visibility
      if (menuName === expandedMenu) {
        setExpandedMenu(null); // Collapse if already expanded
      } else {
        setExpandedMenu(menuName); // Expand the clicked menu
      }
    } else {
      // Navigate to the selected menu
      setActiveMenu(menuName);
    }
  };

  return (
    <aside className="w-64 bg-white shadow-lg p-5 from-neutral-900">
      <h1 className="text-2xl mb-5">Admin Dashboard</h1>
      <nav>
        {menuItems.map((item) => (
          <div key={item.name}>
            {/* Main Menu Item */}
            <div
              className={`flex items-center gap-3 p-3 cursor-pointer rounded-lg transition hover:bg-gray-200 ${
                activeMenu === item.name ? "bg-gray-300" : ""
              }`}
              onClick={() => handleMenuClick(item.name, !!item.subItems)}
            >
              {item.icon}
              <span>{item.name}</span>
            </div>

            {/* Submenu Items */}
            {item.subItems && expandedMenu === item.name && (
              <div className="ml-6">
                {item.subItems.map((subItem) => (
                  <div
                    key={subItem.name}
                    className={`p-2 cursor-pointer rounded-lg transition hover:bg-gray-200 ${
                      activeMenu === subItem.name ? "bg-gray-300" : ""
                    }`}
                    onClick={() => setActiveMenu(subItem.name)}
                  >
                    {subItem.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}