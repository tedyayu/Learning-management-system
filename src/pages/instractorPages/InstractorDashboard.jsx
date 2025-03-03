import { useState } from "react";
import Sidebar from "../../components/instractor/SideBar";
import Header from "../../components/instractor/Header";
import MyCourses from '../../components/instractor/MyCourses'
import Announcements from '../../components/instractor/Announcements'
import Withdrawals from '../../components/instractor/Withdrawals'
import QuizAttempts from '../../components/instractor/QuizAttempts'
import GoogleMeet from '../../components/instractor/GoogleMeet'
import Assignments from '../../components/instractor/Assignments'
import Zoom from '../../components/instractor/Zoom'
import Analytics from '../../components/instractor/Analytics'
import Settings from '../../components/instractor/Settings'
import Logout from '../../components/instractor/Logout'
import CourseCategories from '../../components/instractor/CourseCatagories'



function InstractorDashboard() {
    const [activeMenu, setActiveMenu] = useState("My Courses");

    const renderContent = () => {
        switch (activeMenu) {
          case "My Courses":
            return <MyCourses />;
           
          case "Announcements":
            return <Announcements />;
          case "Course Category":
            return <CourseCategories />;
          case "Withdrawals":
            return <Withdrawals />;
          case "Quiz Attempts":
            return <QuizAttempts />;
            case "Google Meet":
                return <GoogleMeet />;
            case "Assignments":
                return <Assignments />;
            case "Zoom":
                return <Zoom />;
           case "Analytics":
                return <Analytics />;
            case "Settings":
                return <Settings />;
            case "Logout":
                return <Logout />;

          default:
            return <div className="bg-white p-6 rounded-lg shadow-md"><p className="text-gray-600">Select a section</p></div>;
        }
      };
  return (
  

        <>
        <Header/>
        <div className="flex h-full  w-full bg-gray-100">
            <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            <main className="flex-1 p-6">{renderContent()}</main>
        </div>
    </>
    
    
  );
}

export default InstractorDashboard;