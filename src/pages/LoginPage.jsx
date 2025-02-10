import React from 'react'
import Login from '../components/Login'
import Header from '../components/Header'
import Footer from '../components/Footer'

const LoginPage = () => {
  return (
    <div className="bg-gray-100 h-screen flex flex-col overflow-y-auto"> {/* Changed to flex-col */}
      <Header className="w-full" /> {/* Header at the top */}
      <div className="flex-grow flex items-center justify-center "> {/* Centering content */}
        <div className="bg-white p-8 rounded-lg shadow-md w-96 m-10">
          <Login />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default LoginPage