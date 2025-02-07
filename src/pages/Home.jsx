import React,{useEffect,useState} from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Announcement from '../components/Announcement'
import Login from '../components/Login'
import SubHeader from '../components/SubHeader'
import Courses from '../components/Courses'
import CourseCategory from '../components/CourseCategory'
import CourseOverview from '../components/CourseOverview'

const Home = () => {
  const [authToken,setAuthToken]=useState(null);
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
        setAuthToken(token);
    }
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <Header isLoggedIn={!!authToken}/>
      <SubHeader/>
      <div className="flex-grow flex bg-white py-0 border-t border-gray-400" >
        <div className="w-2/5 flex flex-col ml-4">
          <Navigation />
          <Announcement /> {/* Announcement will stick to the bottom due to flex-col in parent */}
        </div>
        <div className="w-full flex  pr-10 flex-col ">
            <Courses/>
            <CourseOverview/>
        </div>
        <div className="w-2/5 flex items-end justify-start pr-4 flex-col"> {/* Added padding right */}
          <Login />
          <CourseCategory/>
        </div>
      </div>
    </div>
  )
}

export default Home;