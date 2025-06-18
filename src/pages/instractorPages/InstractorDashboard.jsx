import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Sidebar from "../../components/instractor/SideBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { DepartmentProvider } from "../../context/departmentContext";
import { InstractorProvider } from "../../context/InstractorContext";
import { CourseProvider } from "../../context/CourseContext";
import { StudentProvider } from "../../context/StudentContext";
import { AnnouncementProvider } from "../../context/AnnouncmentContext";

function InstractorDashboard() {
    const { user,setUser } = useContext(AuthContext);


  return (
    <AnnouncementProvider>
      <StudentProvider>
        <CourseProvider>
          <InstractorProvider>
            <DepartmentProvider>
              <div className="min-h-screen flex flex-col bg-gray-100">
                <div className="sticky top-0 z-10 bg-white shadow">
                  
                  <Header user={user} isLoggedIn={!!user} setUser={setUser}/>
                </div>
                <div className="flex flex-1 overflow-hidden">
                  <div className="w-64 bg-gray-200 border-r border-gray-300 overflow-y-auto">
                    <Sidebar />
                  </div>
                  <main className="flex-1 overflow-y-auto">
                    <div className="bg-white rounded-lg shadow-md bg-gray-100 min-h-full">
                      <Outlet />
                    </div>
                  </main>
                </div>
                {/* Footer always at the bottom */}
                <Footer isLoggedIn={!!user}/>
              </div>
            </DepartmentProvider>
          </InstractorProvider>
        </CourseProvider>
      </StudentProvider>
    </AnnouncementProvider>
  );
}

export default InstractorDashboard;