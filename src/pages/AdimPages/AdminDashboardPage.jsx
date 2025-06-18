import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import Header from "../../components/admin/Header";
import { DepartmentProvider } from "../../context/departmentContext";
import { InstractorProvider } from "../../context/InstractorContext";
import { CourseProvider } from "../../context/CourseContext";
import { StudentProvider } from "../../context/StudentContext";
import {AnnouncementProvider} from "../../context/AnnouncmentContext"
import {AuthContext} from "../../context/AuthContext/"
import {useContext} from "react"
import {AuthProvider} from "../../context/AuthContext"

export default function AdminDashboard() {
  const {user,setUser}=useContext(AuthContext);


  return (
  <AuthProvider>
      <AnnouncementProvider>
        <StudentProvider>
          <CourseProvider>
            <InstractorProvider>
              <DepartmentProvider>
                <div className="h-screen flex flex-col bg-gray-100">
                  <div className="sticky top-0 z-10 bg-white shadow">
                    <Header isLoggedIn={!!user}  user={user} setUser={setUser}/>
                  </div>
                  <div className="flex flex-1 overflow-hidden">
                    <div className="w-64 bg-gray-200 border-r border-gray-300 overflow-y-auto">
                      <Sidebar />
                    </div>
                    <main className="flex-1 overflow-y-auto h-full">
                      <div className="bg-white rounded-lg shadow-md bg-gray-100 h-full">
                        <Outlet />
                      </div>
                    </main>
                  </div>
                </div>
              </DepartmentProvider>
            </InstractorProvider>
          </CourseProvider>
        </StudentProvider>
      </AnnouncementProvider>
    </AuthProvider>
  );
}
