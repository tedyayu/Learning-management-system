import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import LoginPage from "./pages/studentPages/LoginPage";
import Overview from "./pages/studentPages/Overview";
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
import AdminAnnouncements from "./components/admin/Announcement";

import InstractorDashboard from "./pages/instractorPages/InstractorDashboard";
import MyCourses from "./components/instractor/MyCourses";
import Announcements from "./components/instractor/Announcements";
import MyDashboard from "./components/instractor/MyDashboard";
import CourseContent from "./components/instractor/CourseContent";
import CreateAssignment from "./components/instractor/CreateAssignment";
import CreateLesson from "./components/instractor/CreateLesson";
import LessonPage from "./components/instractor/LessonPage";
import CourseDetailPage from "./pages/studentPages/CourseDetailPage.jsx";
import ContentDetailPage from "./pages/studentPages/ContentDetailPage.jsx";
import CourseDetailHomePage from "./pages/studentPages/CourseDetailHomePage.jsx";
import {AnnouncementProvider} from "./context/AnnouncmentContext.jsx";
import {DepartmentProvider} from "./context/departmentContext.jsx";
import InstractorProfilePage from "./pages/instractorPages/ProfilePage.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DepartmentProvider>
      <AnnouncementProvider>
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login-page" element={<LoginPage />} />
              <Route path="/ProfilePage" element={<ProfilePage />} />
              <Route path="/Overview" element={<Overview />} />
              <Route path="/course/:courseId" element={<CourseDetailPage />}/>
              <Route path="/course/:courseId/Home" element={<CourseDetailHomePage />} />
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
                <Route path="course/:courseId/enroll/user-enrollment" element={<CourseEnrollment />} />
              </Route>

              <Route path="/InstractorProfilePage" element={<InstractorProfilePage />} />
              <Route path="/InstractorDashboard" element={<InstractorDashboard />}>
                <Route index element={<MyDashboard />} />
                <Route path="mycourses" element={<MyCourses />} />
                <Route path="mycourses/:courseId" element={<CourseContent/>}/>
                <Route path="mycourses/:courseId/lesson/:lessonId" element={<LessonPage />} />
                <Route path="mycourses/:courseId/create-assignment/:showContentFormId" element={<CreateAssignment />} />
                <Route path="mycourses/:courseId/create-lesson/:showContentFormId" element={<CreateLesson />} />
                <Route path="mycourses/:courseId/lesson/:lessonId/edit-lesson" element={<CreateLesson />}/>
                <Route path="announcements" element={<Announcements />} />
                
              </Route>
              <Route path="/ProfilePage" element={<ProfilePage />} />
              <Route path="/InstractorDashboard" element={<InstractorDashboard />} />
            </Routes>
          </Router>
        </AuthProvider>
      </AnnouncementProvider>
    </DepartmentProvider>
  </StrictMode>
);