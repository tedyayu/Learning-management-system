
const API_BASE_URL = "http://localhost:5001";




export const loginUser = async (credentials) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
        return response.json();
    } catch (error) {
      console.error("Login error occured:", error);
      throw error;
    }
  };

export const registerStudent= async (credentials)=>{
    const response=await fetch (`${API_BASE_URL}/api/auth/registerStudent`,{
        method:"POST",
        body:JSON.stringify(credentials),
        headers:{
            "Content-Type":"application/json"
        },
        credentials: "include"
    })
    return response.json();
}
export const logOutUser = async () => {
    const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
      method: "POST",
      credentials: "include"
    });
    return response;
};


export const updateProfile= async (profileData)=>{
    
    const response=await fetch (`${API_BASE_URL}/api/student/updateProfile`,{
        method:"POST",
        body:JSON.stringify(profileData),
        headers:{
            "Content-Type":"application/json"      
        },
        credentials: "include"
    })
    return response.json();
}

export const updatePassword= async (passwordData)=>{
    
    const response=await fetch (`${API_BASE_URL}/api/student/updatePassword`,{
        method:"POST",
        body:JSON.stringify(passwordData),
        headers:{
            "Content-Type":"application/json",
        },
        credentials: "include"
    })
    return response.json();
}

export const getAllUsers = async () => {
    const response = await fetch(`${API_BASE_URL}/api/student/all`,{
        credentials: "include"
    });
    return response.json();
}   

export const searchUsers = async (query) => {
    console.log("query", query);
    const response = await fetch(`${API_BASE_URL}/api/student/search?query=${query}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include"
    });
    return response.json();
};