import {FaBook, FaTachometerAlt} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, path: "/InstractorDashboard" },
    { name: "My Courses", icon: <FaBook />, path: "/InstractorDashboard/mycourses" },
  ];


export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside className="w-64 bg-white shadow-lg p-5 h-full">
      <h1 className="text-2xl font-bold mb-5 font-sans">Instractor Dashboard</h1>
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
