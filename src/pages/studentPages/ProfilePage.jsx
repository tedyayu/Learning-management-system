import {useContext} from 'react'
import Header from '../../components/Header'
import Profile from '../../components/student/Profile'
import Footer from '../../components/Footer'
import {AuthContext } from '../../context/AuthContext'

const ProfilePage = () => {
    const {authToken,user,setAuthToken, setUser}=useContext(AuthContext);

  return (
    <div className="bg-gray-100 h-screen flex flex-col overflow-y-auto"> {/* Changed to flex-col */}
      <Header className="w-full" isLoggedIn={!!authToken}  user={user} setAuthToken={setAuthToken}/> {/* Header at the top */}
      <div className="flex-grow flex items-center justify-center "> {/* Centering content */}
        <div className="bg-white p-8 rounded-lg shadow-md w-1/2 m-10">
          <Profile user={user} setUser={setUser}/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ProfilePage