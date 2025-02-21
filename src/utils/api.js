const API_BASE_URL = "http://localhost:5000";

export const loginUser=async (credentials)=>{
    const response=await fetch(`${API_BASE_URL}/api/auth/login`,{
        method:"POST",
        body:JSON.stringify(credentials),
        headers:{
            "Content-Type":"application/json"
        }
    })
    return response.json();
}

export const registerUser= async (credentials)=>{
    const response=await fetch (`${API_BASE_URL}/api/auth/register`,{
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
            "Content-Type":"application/json"
        }
    })
    return response.json();
}