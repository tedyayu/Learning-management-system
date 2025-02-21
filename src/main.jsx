import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import LoginPage from './pages/LoginPage.jsx'
import Overview from './pages/Overview.jsx'
import GradesPage from './pages/GradesPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import Home from './pages/Home.jsx'
import {AuthProvider } from './context/AuthContext.jsx'
import AdminDashboard from './pages/AdminDashboardPage.jsx'


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
        </Routes>
      </Router>
    </AuthProvider>
    
  </StrictMode>,
)
