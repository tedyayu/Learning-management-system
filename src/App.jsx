import React from 'react'
import Home from './pages/Home'

export default function App() {
  
  const authToken=true;
  return (
    <div >
      <Home authToken={authToken}/>
    </div>
  )
}