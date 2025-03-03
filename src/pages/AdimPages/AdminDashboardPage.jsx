import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import RegisterStudent from "./RegisterStudent";
import RegisterInstarctorPage from "./RegisterInstractorPage"
import CourseManagement from "../../components/admin/CourseManagement";
import ContentManagement from "../../components/admin/ContentManagement";

export default function AdminDashboard() {
  const [activeMenu, setActiveMenu] = useState("Register Student");

  const renderContent = () => {
    switch (activeMenu) {
      case "Register Student":
        return <RegisterStudent />;
      case "Course Management":
        return <CourseManagement />;
        case "Register Instractor":
        return <RegisterInstarctorPage />;
      case "Content Management":
        return <ContentManagement />;
      default:
        return <div className="bg-white p-6 rounded-lg shadow-md"><p className="text-gray-600">Select a section</p></div>;
    }
  };

  return (
    <div className="flex h-full  w-full bg-gray-100">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <main className="flex-1 p-6">{renderContent()}</main>
    </div>
  );
}


