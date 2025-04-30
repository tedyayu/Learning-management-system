// import { useState } from "react";
import { FaUsers, FaBook, FaUserShield, FaCog, FaChartBar, FaCommentsDollar, FaBroadcastTower, FaLock, FaBell, FaSchool, FaUserGraduate, FaTachometerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// const menuItems = [
//   { name: "Dashboard", icon: <FaTachometerAlt /> },
//   { name: "Student Management", icon: <FaUserGraduate /> },
//   { name: "Instractor Management", icon: <FaUsers /> },
//   { name: "Department Management", icon: <FaSchool /> },
//   {
//     name: "Course",
//     icon: <FaBook />,
//     subItems: [
//       { name: "Course Management" },
//       { name: "Course Setting" },
//     ],
//   },
//   { name: "Enrollment and Acess", icon: <FaUserShield /> },
//   { name: "Assessment & Grading", icon: <FaChartBar /> },
//   { name: "Real-Time Features", icon: <FaBroadcastTower /> },
//   { name: "Reports & Analytics", icon: <FaChartBar /> },
//   { name: "Security & Authentication", icon: <FaLock /> },
//   { name: "System Settings", icon: <FaCog /> },
//   { name: "Payment Management", icon: <FaCommentsDollar /> },
//   { name: "Notifications & Communication", icon: <FaBell /> },
// ];

// export default function Sidebar({ activeMenu, setActiveMenu }) {
//   const [expandedMenu, setExpandedMenu] = useState(null);

//   const handleMenuClick = (menuName, hasSubItems) => {
//     if (hasSubItems) {
//       // Toggle submenu visibility
//       if (menuName === expandedMenu) {
//         setExpandedMenu(null); // Collapse if already expanded
//       } else {
//         setExpandedMenu(menuName); // Expand the clicked menu
//       }
//     } else {
//       // Navigate to the selected menu
//       setActiveMenu(menuName);
//     }
//   };

//   return (
//     <aside className="w-64 bg-white shadow-lg p-5 from-neutral-900">
//       <h1 className="text-2xl mb-5">Admin Dashboard</h1>
//       <nav>
//         {menuItems.map((item) => (
//           <div key={item.name}>
//             {/* Main Menu Item */}
//             <div
//               className={`flex items-center gap-3 p-3 cursor-pointer rounded-lg transition hover:bg-gray-200 ${
//                 activeMenu === item.name ? "bg-gray-300" : ""
//               }`}
//               onClick={() => handleMenuClick(item.name, !!item.subItems)}
//             >
//               {item.icon}
//               <span>{item.name}</span>
//             </div>

//             {item.subItems && expandedMenu === item.name && (
//               <div className="ml-6">
//                 {item.subItems.map((subItem) => (
//                   <div
//                     key={subItem.name}
//                     className={`p-2 cursor-pointer rounded-lg transition hover:bg-gray-200 ${
//                       activeMenu === subItem.name ? "bg-gray-300" : ""
//                     }`}
//                     onClick={() => setActiveMenu(subItem.name)}
//                   >
//                     {subItem.name}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </nav>
//     </aside>
//   );
// }



const menuItems = [
  { name: "Dashboard", icon: <FaTachometerAlt />, path: "/AdminDashboard" },
  { name: "Student Management", icon: <FaUserGraduate />, path: "/AdminDashboard/student-management" },
  { name: "Instractor Management", icon: <FaUsers />, path: "/AdminDashboard/instructor-management" },
  { name: "Department Management", icon: <FaSchool />, path: "/AdminDashboard/department-management" },
  { name: "Course Management", icon: <FaBook />, path: "/AdminDashboard/course" },
  { name: "Enrollment and Access", icon: <FaUserShield />, path: "/AdminDashboard/enrollment-access" },
  { name: "Content Management", icon: <FaCog />, path: "/AdminDashboard/content-management" },
  { name: "Assessment & Grading", icon: <FaChartBar /> , path: "/AdminDashboard/assessment-grading"},
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
            onClick={() => navigate(item.path)} // Navigate to the route
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}