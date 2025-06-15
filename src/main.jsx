import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import LoginPage from "./pages/studentPages/LoginPage";
import Overview from "./pages/studentPages/Overview";
import GradesPage from "./pages/studentPages/GradesPage.jsx";
import ProfilePage from "./pages/studentPages/ProfilePage";
import Home from "./pages/studentPages/Home.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import AdminDashboard from "./pages/AdimPages/AdminDashboardPage";
import RegisterStudent from "./components/admin/RegisterStudent";
import RegisterInstarctorPage from "./components/admin/RegisterInstractorPage";
import CourseManagement from "./components/admin/CourseManagement";
import ContentManagement from "./components/admin/ContentManagement";
import Department from "./components/admin/Department";
import Dashboard from "./components/admin/Dashboard";
import CourseDetailsManagment from "./components/admin/CourseDetailsManagment";
import EnrolledUsers from "./components/admin/EnrolledUsers";
import CourseEnrollment from "./components/admin/CourseEnrollment";
import CourseSettings from "./components/admin/CourseSetting";
import AdminAnnouncements from "./components/admin/Announcement";

import InstractorDashboard from "./pages/instractorPages/InstractorDashboard";
import MyCourses from "./components/instractor/MyCourses";
import Announcements from "./components/instractor/Announcements";
import Withdrawals from "./components/instractor/Withdrawals";
import QuizAttempts from "./components/instractor/QuizAttempts";
import GoogleMeet from "./components/instractor/GoogleMeet";
import Assignments from "./components/instractor/Assignments";
import Zoom from "./components/instractor/Zoom";
import Analytics from "./components/instractor/Analytics";
import Settings from "./components/instractor/Settings";
import Logout from "./components/instractor/Logout";
import MyDashboard from "./components/instractor/MyDashboard";
import CourseContent from "./components/instractor/CourseContent";
import CreateAssignment from "./components/instractor/CreateAssignment";
import CreateLesson from "./components/instractor/CreateLesson";
import LessonPage from "./components/instractor/LessonPage";
import CourseDetailPage from "./pages/studentPages/CourseDetailPage.jsx";
import ContentDetailPage from "./pages/studentPages/ContentDetailPage.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/Overview" element={<Overview />} />
          <Route path="/GradesPage" element={<GradesPage />} />
          <Route path="/course/:courseId" element={<CourseDetailPage />} />
          <Route path="/ContentDetail/:chapterId" element={<ContentDetailPage />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />}>
            <Route index element={<Dashboard />} />
            <Route path="student-management" element={<RegisterStudent />} />
            <Route path="instructor-management" element={<RegisterInstarctorPage />} />
            <Route path="department-management" element={<Department />} />
            <Route path="course" element={<CourseManagement />} />
            <Route path="AdminAnnouncements" element={<AdminAnnouncements />} />
            <Route path="content-management" element={<ContentManagement />} />
            <Route path="course/:courseId" element={<CourseDetailsManagment />}/>
            <Route path="course/:courseId/enroll" element={<EnrolledUsers />} />
            <Route path="course/:courseId/settings" element={<CourseSettings />} />
            <Route path="course/:courseId/enroll/user-enrollment" element={<CourseEnrollment />} />
          </Route>


          <Route path="/InstractorDashboard" element={<InstractorDashboard />}>
            <Route index element={<MyDashboard />} />
            <Route path="mycourses" element={<MyCourses />} />
            <Route path="mycourses/:courseId" element={<CourseContent/>}/>
            <Route path="mycourses/:courseId/lesson/:lessonId" element={<LessonPage />} />
            <Route path="mycourses/:courseId/create-assignment/:showContentFormId" element={<CreateAssignment />} />
            <Route path="mycourses/:courseId/create-lesson/:showContentFormId" element={<CreateLesson />} />
            <Route path="mycourses/:courseId/lesson/:lessonId/edit-lesson" element={<CreateLesson />}/>
            <Route path="announcements" element={<Announcements />} />
            <Route path="withdrawals" element={<Withdrawals />} />
            <Route path="quiz-attempts" element={<QuizAttempts />} />
            <Route path="google-meet" element={<GoogleMeet />} />
            <Route path="assignments" element={<Assignments />} />
            <Route path="zoom" element={<Zoom />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<Settings />} />
            
          </Route>
          <Route path="Logout" element={<Logout />} />


          <Route path="/ProfilePage" element={<ProfilePage />} />
          <Route path="/InstractorDashboard" element={<InstractorDashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  </StrictMode>
);