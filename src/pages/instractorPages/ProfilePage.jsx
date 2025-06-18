import {useContext} from 'react'
import Header from '../../components/Header'
import Profile from '../../components/instractor/InstractorProfile'
import Footer from '../../components/Footer'
import {AuthContext } from '../../context/AuthContext'

const InstractorProfilePage = () => {
    const {authToken,user,setAuthToken, setUser}=useContext(AuthContext);

  return (
    <div className="bg-gray-100 h-screen flex flex-col overflow-y-auto">
      <Header isLoggedIn={!!user} user={user} setUser={setUser} setAuthToken={setAuthToken} />
      <div className="flex-grow flex items-center justify-center "> 
        <div className="bg-white p-8 rounded-lg shadow-md w-1/2 m-10">
          <Profile user={user} setUser={setUser}/>
        </div>
      </div>
      <Footer isLoggedIn={!!user}/>
    </div>
  )
}

export default InstractorProfilePage