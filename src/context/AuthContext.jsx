import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider =({children})=>{
    const [authToken,setAuthToken]=useState(null);
    const [user, setUser] = useState(null);
    const [instructorAuth, setInstructorAuth] = useState(null);
    
    
      return (
        <AuthContext.Provider value={{ authToken,user,setAuthToken,setUser,instructorAuth, setInstructorAuth }}>
          {children}
        </AuthContext.Provider>
      );
}