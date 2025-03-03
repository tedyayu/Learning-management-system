const API_BASE_URL = "http://localhost:5001";
const token = localStorage.getItem("authToken");

export const loginUser = async (credentials) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: {
          "Content-Type": "application/json"
        }
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
        }
    })
    return response.json();
}

export const registerInstractor = async (credentials)=>{
    const response=await fetch (`${API_BASE_URL}/api/auth/registerInstractor`,{
        method:"POST",
        body:JSON.stringify(credentials),
        headers:{
            "Content-Type":"application/json"
        }
    })
    return response.json();
}

export const updateProfile= async (profileData)=>{
    const response=await fetch (`${API_BASE_URL}/api/student/update`,{
        method:"POST",
        body:JSON.stringify(profileData),
        headers:{
            "Content-Type":"application/json",
            "authorization": `Bearer ${token}`
        }
    })
    console.log(`Bearer ${token}`);
    return response.json();
}

export const updatePassword= async (passwordData)=>{
    
    const response=await fetch (`${API_BASE_URL}/api/student/updatePassword`,{
        method:"POST",
        body:JSON.stringify(passwordData),
        headers:{
            "Content-Type":"application/json",
            "authorization": `Bearer ${token}`
        }
    })
    return response.json();
}

export const getAllUsers = async () => {
    const response = await fetch(`${API_BASE_URL}/api/student/all`);
    return response.json();
}   

export const searchUsers = async (query) => {
    console.log("query", query);
    const response = await fetch(`${API_BASE_URL}/api/student/search?query=${query}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.json();
};