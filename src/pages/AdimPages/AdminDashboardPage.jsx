import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import RegisterStudent from "./RegisterStudent";
import RegisterInstarctorPage from "./RegisterInstractorPage"
import CourseManagement from "../../components/admin/CourseManagement";
import ContentManagement from "../../components/admin/ContentManagement";
import Department from "../../components/admin/Department";
import { DepartmentProvider } from "../../context/departmentContext";
import { InstractorProvider } from "../../context/InstractorContext";
import {CourseProvider} from "../../context/CourseContext";
import {Outlet} from "react-router-dom"


export default function AdminDashboard() {
  const [activeMenu, setActiveMenu] = useState("Student Management");

  const renderContent = () => {
    switch (activeMenu) {
      case "Department Management":
        return <Department />;
      case "Student Management":
        return <RegisterStudent />;
      case "Course Management":
        return <CourseManagement />;
      case "Instractor Management":
        return <RegisterInstarctorPage />;
      case "Content Management":
        return <ContentManagement />;
      default:
        return <div className="bg-white p-6 rounded-lg shadow-md"><p className="text-gray-600">Select a section</p></div>;
    }
  };

  return (
    <CourseProvider>
      <InstractorProvider> 
        <DepartmentProvider> 
          <div className="flex h-full  w-full bg-gray-100">
            <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            <main className="flex-1 p-6">
              {activeMenu === "Course Management" ? (
                <>
                  {renderContent()}
                  <Outlet />
                </>
              ) : (
                renderContent()
              )}
            </main>
          </div>
        </DepartmentProvider>
      </InstractorProvider>
    </CourseProvider>
  );
}


