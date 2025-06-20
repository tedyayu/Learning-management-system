import {useContext} from 'react'
import Header from '../../components/Header'
import Navigation from '../../components/Navigation'
import Login from '../../components/Login'
import SubHeader from '../../components/SubHeader'
import CourseDetail from '../../components/student/CourseDetail'
import CourseCategory from '../../components/CourseCategory.jsx'
import CourseOverview from '../../components/student/CourseOverview'
import Footer from '../../components/Footer'
import SiteNews from '../../components/SiteNews'
import {AuthContext } from '../../context/AuthContext'
import { DepartmentProvider } from "../../context/departmentContext";


const Home = () => {

  const {user,setUser}=useContext(AuthContext);
  
  

  return (
    <DepartmentProvider>
      <div className="h-screen flex flex-col">
        <Header isLoggedIn={!!user}  user={user} setUser={setUser}/>
        <SubHeader isLoggedIn={!!user} user={user}/>
        <div className="flex-grow flex bg-white py-0 border-t border-gray-400" >
          <div className="w-2/5 flex flex-col ml-4">
            <Navigation isLoggedIn={!!user} user={user}/>
          </div>
          <div className="w-full flex  pr-10 flex-col m-5">
              {user  ? (
                <CourseOverview user={user}/>
              ):(
                <>
                  <CourseDetail/>
                  <div id="site-news-section">
                    <SiteNews />
                  </div>
                </>
              )}
            
              
          </div>
          <div className="w-2/5 flex items-end justify-start pr-4 flex-col"> {/* Added padding right */}
              {user ? (
                <CourseCategory/>
              ):(
                <Login />
              )}
          </div>
        </div>

        <Footer isLoggedIn={!!user}/>
      </div>
    </DepartmentProvider>
  )
}

export default Home;