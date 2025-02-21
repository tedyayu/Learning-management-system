import React,{useContext} from 'react' 
import Navigation from '../components/Navigation'
import UserDashboard from '../components/UserDashboard'
import CoursesImTaking from '../components/CoursesImTaking'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AuthContext } from '../context/AuthContext';

const Overview = () => {
    const { authToken } = useContext(AuthContext);

  return (
    <div>
        <Header isLoggedIn={!!authToken}/>
        <UserDashboard/>
        <div className="flex">
            <div className="w-1/4"> 
                <Navigation isLoggedIn={!!authToken}/>
            </div>
            <div className="w-3/4"> 
                <CoursesImTaking />
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Overview