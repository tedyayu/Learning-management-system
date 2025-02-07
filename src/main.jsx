import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';
//import Header from './components/Header.jsx';
//import Login from './components/Login';
//import Home from './components/Home';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/*' element={<App/>}/>
      </Routes>
    </Router>
    
  </StrictMode>,
)
