import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import LoginPage from './pages/studentPages/LoginPage'
import Overview from './pages/studentPages/Overview'
import GradesPage from './pages/studentPages/GradesPage.jsx'
import ProfilePage from './pages/studentPages/ProfilePage'
import Home from './pages/studentPages/Home.jsx'
import {AuthProvider } from './context/AuthContext.jsx'
import AdminDashboard from './pages/AdimPages/AdminDashboardPage'
import InstractorDashboard from './pages/instractorPages/InstractorDashboard'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/*' element={<Home/>}/>
          <Route path='/loginPage' element={<LoginPage/>}/>
          <Route path='/Overview' element={<Overview/>}/>
          <Route path='/GradesPage' element={<GradesPage/>}/>
          <Route path='/AdminDashboard' element={<AdminDashboard/>}/>
          <Route path='/ProfilePage' element={<ProfilePage/>}/>
          <Route path='/InstractorDashboard' element={<InstractorDashboard/>}/>
        </Routes>
      </Router>
    </AuthProvider>
  </StrictMode>
)
