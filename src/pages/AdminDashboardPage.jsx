import { useState } from "react";
import Sidebar from "../components/admin/Sidebar";
import UserManagement from "../components/admin/UserManagment";
import CourseManagement from "../components/admin/CourseManagement";
import ContentManagement from "../components/admin/ContentManagement";

export default function AdminDashboard() {
  const [activeMenu, setActiveMenu] = useState("User Management");

  const renderContent = () => {
    switch (activeMenu) {
      case "User Management":
        return <UserManagement />;
      case "Course Management":
        return <CourseManagement />;
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
