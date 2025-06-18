const API_BASE_URL = "http://localhost:5001";


export const getInstarctor = async () => {
    const instractor = await fetch(`${API_BASE_URL}/api/instractor/all`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        },
        credentials: "include"
    });
    return instractor.json();
}
export const getSingleInstarctor = async (id) => {
    const instractor = await fetch(`${API_BASE_URL}/api/instractor/${id}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        },
        credentials: "include"
    }
        
    );
    return instractor.json();
}
export const registerInstractor = async (credentials)=>{
    const response=await fetch (`${API_BASE_URL}/api/instractor/registerInstractor`,{
        method:"POST",
        body:JSON.stringify(credentials),
        headers:{
            "Content-Type":"application/json"
        },
        credentials: "include"
    })
    return response.json();
}
export const loginInstractor = async (credentials) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/instractor/loginInstractor`, {
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
}

export const updateInstractorProfile= async (profileData,userId)=>{
    
    const response=await fetch (`${API_BASE_URL}/api/instractor/updateProfile/${userId}`,{
        method:"POST",
        body:JSON.stringify(profileData),
        headers:{
            "Content-Type":"application/json"      
        },
        credentials: "include"
    })
    return response.json();
}

export const updateInstractorPassword= async (passwordData, userId)=>{
    
    const response=await fetch (`${API_BASE_URL}/api/instractor/updatePassword/${userId}`,{
        method:"POST",
        body:JSON.stringify(passwordData),
        headers:{
            "Content-Type":"application/json",
        },
        credentials: "include"
    })
    return response.json();
}

