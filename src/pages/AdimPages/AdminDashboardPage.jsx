import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import Header from "../../components/instractor/Header";
import { DepartmentProvider } from "../../context/departmentContext";
import { InstractorProvider } from "../../context/InstractorContext";
import { CourseProvider } from "../../context/CourseContext";
import { StudentProvider } from "../../context/StudentContext";

export default function AdminDashboard() {
  return (
    <StudentProvider>
      <CourseProvider>
        <InstractorProvider>
          <DepartmentProvider>
            <div className="h-screen flex flex-col bg-gray-100">
              <div className="sticky top-0 z-10 bg-white shadow">
                <Header />
              </div>
              <div className="flex flex-1 overflow-hidden">
                <div className="w-64 bg-gray-200 border-r border-gray-300 overflow-y-auto">
                  <Sidebar />
                </div>
                <main className="flex-1 overflow-y-auto">
                  <div className="bg-white rounded-lg shadow-md bg-gray-100">
                    <Outlet />
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
