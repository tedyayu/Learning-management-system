// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './index.css'
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import LoginPage from './pages/studentPages/LoginPage'
// import Overview from './pages/studentPages/Overview'
// import GradesPage from './pages/studentPages/GradesPage.jsx'
// import ProfilePage from './pages/studentPages/ProfilePage'
// import Home from './pages/studentPages/Home.jsx'
// import {AuthProvider } from './context/AuthContext.jsx'
// import AdminDashboard from './pages/AdimPages/AdminDashboardPage'
// import InstractorDashboard from './pages/instractorPages/InstractorDashboard'
// import  CourseDetailsManagment  from './components/admin/CourseDetailsManagment'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <AuthProvider>
//       <Router>
//         <Routes>
//           <Route path='/*' element={<Home/>}/>
//           <Route path='/loginPage' element={<LoginPage/>}/>
//           <Route path='/Overview' element={<Overview/>}/>
//           <Route path='/GradesPage' element={<GradesPage/>}/>
//           <Route path='/AdminDashboard/*' element={<AdminDashboard/>}>
//             <Route path='course/:courseId' element={<CourseDetailsManagment/>}/>
//           </Route>
//           <Route path='/ProfilePage' element={<ProfilePage/>}/>
//           <Route path='/InstractorDashboard' element={<InstractorDashboard/>}/>
//         </Routes>
//       </Router>
//     </AuthProvider>
//   </StrictMode>
// )
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
import InstractorDashboard from "./pages/instractorPages/InstractorDashboard";
import RegisterStudent from "./components/admin/RegisterStudent";
import RegisterInstarctorPage from "./components/admin/RegisterInstractorPage";
import CourseManagement from "./components/admin/CourseManagement";
import ContentManagement from "./components/admin/ContentManagement";
import Department from "./components/admin/Department";
import EnrollmentAcess from "./components/admin/EnrollmentAcess";
import Dashboard from "./components/admin/Dashboard";
import CourseDetailsManagment from "./components/admin/CourseDetailsManagment";
import EnrolledUsers from "./components/admin/EnrolledUsers";
import CourseEnrollment from "./components/admin/CourseEnrollment";
import CourseSettings from "./components/admin/CourseSetting";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/Overview" element={<Overview />} />
          <Route path="/GradesPage" element={<GradesPage />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />}>
            <Route index element={<Dashboard />} />
            <Route path="student-management" element={<RegisterStudent />} />
            <Route path="instructor-management" element={<RegisterInstarctorPage />} />
            <Route path="department-management" element={<Department />} />
            <Route path="course" element={<CourseManagement />} />
            <Route path="enrollment-access" element={<EnrollmentAcess />} />
            <Route path="content-management" element={<ContentManagement />} />
            <Route path="course/:courseId" element={<CourseDetailsManagment />}/>
            <Route path="course/:courseId/enroll" element={<EnrolledUsers />} />
            <Route path="course/:courseId/settings" element={<CourseSettings />} />
            <Route path="course/:courseId/enroll/user-enrollment" element={<CourseEnrollment />} />
          </Route>
          <Route path="/ProfilePage" element={<ProfilePage />} />
          <Route path="/InstractorDashboard" element={<InstractorDashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  </StrictMode>
);