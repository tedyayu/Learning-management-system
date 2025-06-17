import {useContext} from 'react'
import Header from '../../components/Header'
import Navigation from '../../components/Navigation'
import Announcement from '../../components/student/Announcement'
import Login from '../../components/Login'
import SubHeader from '../../components/SubHeader'
import Courses from '../../components/Courses'
import CourseCategory from '../../components/CourseCategory'
import Footer from '../../components/Footer'
import SiteNews from '../../components/SiteNews'
import CourseDetailsList from '../../components/student/CourseDetailsList'
import {AuthContext } from '../../context/AuthContext'
import { useLocation } from 'react-router-dom';

const CourseDetailPage = () => {

  const {user, setUser}=useContext(AuthContext);
  const location = useLocation();
  const course = location.state?.course;
  const userId = location.state?.userId;


  return (
    <div className="h-screen flex flex-col">
      <Header isLoggedIn={!!user}  user={user} setUser={setUser}/>
      <SubHeader isLoggedIn={!!user} user={user}/>
      <div className="flex-grow flex bg-white py-0 border-t border-gray-400" >
        <div className="w-2/5 flex flex-col ml-4">
          <Navigation isLoggedIn={!!user} user={user}/>
          <Announcement /> 
        </div>
        <div className="w-full flex pr-10 flex-col m-5">
          {user ? (
            <CourseDetailsList course={course} userId={userId} />
          ) : (
            <Courses />
          )}
          <SiteNews />
        </div>
        <div className="w-2/5 flex items-end justify-start pr-4 flex-col"> {/* Added padding right */}
            {user ? (
              <CourseCategory/>
            ):(
              <Login />
            )}
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default CourseDetailPage;