import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import RegisterStudent from "../../components/admin/RegisterStudent";
import RegisterInstarctorPage from "../../components/admin/RegisterInstractorPage"
import CourseManagement from "../../components/admin/CourseManagement";
import ContentManagement from "../../components/admin/ContentManagement";
import Department from "../../components/admin/Department";
import EnrollmentAcess from "../../components/admin/EnrollmentAcess"
import Header from "../../components/instractor/Header"
import Dashboard from "../../components/admin/Dashboard";
import { DepartmentProvider } from "../../context/departmentContext";
import { InstractorProvider } from "../../context/InstractorContext";
import {CourseProvider} from "../../context/CourseContext";
import {StudentProvider} from "../../context/StudentContext"
import {Outlet} from "react-router-dom"


export default function AdminDashboard() {
  const [activeMenu, setActiveMenu] = useState("Student Management");

  const renderContent = () => {
    switch (activeMenu) {
      case "Dashboard":
        return <Dashboard />;
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
      case "Enrollment and Acess":
        return <EnrollmentAcess/>
      default:
        return <div className="bg-white p-6 rounded-lg shadow-md"><p className="text-gray-600">Select a section</p></div>;
    }
  };

  return (
    <StudentProvider>
      <CourseProvider>
        <InstractorProvider>
          <DepartmentProvider>
            <div className="h-screen flex flex-col bg-gray-100">
              {/* Header */}
              <div className="sticky top-0 z-10 bg-white shadow">
                <Header />
              </div>
  
              {/* Main Content Area */}
              <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <div className="w-64 bg-gray-200 border-r border-gray-300 overflow-y-auto">
                  <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                </div>
  
                {/* Content */}
                <main className="flex-1  overflow-y-auto">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    {activeMenu === "Course Management" ? (
                      <>
                        {renderContent()}
                        <Outlet />
                      </>
                    ) : (
                      renderContent()
                    )}
                  </div>
                </main>
              </div>
            </div>
          </DepartmentProvider>
        </InstractorProvider>
      </CourseProvider>
    </StudentProvider>
  );
}


