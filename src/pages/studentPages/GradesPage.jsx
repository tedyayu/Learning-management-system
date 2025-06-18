import {useContext} from 'react' 
import Navigation from '../../components/Navigation'
import UserDashboard from '../../components/student/UserDashboard'
import Grades from '../../components/student/Grades'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { AuthContext } from '../../context/AuthContext';
import { useLocation } from 'react-router-dom';


const GradesPage = () => {
  const { authToken } = useContext(AuthContext);
  const location = useLocation();
  const course = location.state?.course;

 
  return (
    <>
    <Header isLoggedIn={!!authToken}/>
        <UserDashboard/>
        <div className="flex">
            <div className="w-1/4"> 
                <Navigation isLoggedIn={!!authToken}/>
            </div>
            <div className="w-3/4"> 
            {course?(<Grades course={course}/>):(
              <div>Error: Course data not found.</div>
            )}
                
            </div>
        </div>
        <Footer isLoggedIn={!!user}/>
    </>
  )
}

export default GradesPage