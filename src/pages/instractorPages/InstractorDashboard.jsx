//import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/instractor/SideBar";
import Header from "../../components/instractor/Header";
// import MyCourses from '../../components/instractor/MyCourses'
// import Announcements from '../../components/instractor/Announcements'
// import Withdrawals from '../../components/instractor/Withdrawals'
// import QuizAttempts from '../../components/instractor/QuizAttempts'
// import GoogleMeet from '../../components/instractor/GoogleMeet'
// import Assignments from '../../components/instractor/Assignments'
// import Zoom from '../../components/instractor/Zoom'
// import Analytics from '../../components/instractor/Analytics'
// import Settings from '../../components/instractor/Settings'
// import Logout from '../../components/instractor/Logout'
import { DepartmentProvider } from "../../context/departmentContext";
import { InstractorProvider } from "../../context/InstractorContext";
import { CourseProvider } from "../../context/CourseContext";
import { StudentProvider } from "../../context/StudentContext";


function InstractorDashboard() {
    // const [activeMenu, setActiveMenu] = useState("My Courses");

    // const renderContent = () => {
    //     switch (activeMenu) {
    //       case "My Courses":
    //         return <MyCourses />;
           
    //       case "Announcements":
    //         return <Announcements />;
    //       case "Withdrawals":
    //         return <Withdrawals />;
    //       case "Quiz Attempts":
    //         return <QuizAttempts />;
    //         case "Google Meet":
    //             return <GoogleMeet />;
    //         case "Assignments":
    //             return <Assignments />;
    //         case "Zoom":
    //             return <Zoom />;
    //        case "Analytics":
    //             return <Analytics />;
    //         case "Settings":
    //             return <Settings />;
    //         case "Logout":
    //             return <Logout />;

    //       default:
    //         return <div className="bg-white p-6 rounded-lg shadow-md"><p className="text-gray-600">Select a section</p></div>;
    //     }
    //   };
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

export default InstractorDashboard;