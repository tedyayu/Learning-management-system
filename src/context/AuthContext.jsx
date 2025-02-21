import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider =({children})=>{
    const [authToken,setAuthToken]=useState(null);
    const [user, setUser] = useState(null); 

      /*
      useEffect(() => {
        const token = localStorage.getItem("authToken");
        const storedUser=localStorage.getItem("user");
        console.log(token)
        console.log(storedUser)
        try {
          if (token ) {
            setAuthToken(token);
            setUser(JSON.parse(storedUser));
          }
        } catch (error) {
          console.error("Error parsing user data:", error);
          
        }
        
      }, []);
*/
      return (
        <AuthContext.Provider value={{ authToken,user,setAuthToken,setUser }}>
          {children}
        </AuthContext.Provider>
      );
}