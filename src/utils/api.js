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

export const submitAnnouncement = async (announcement) => {
    const response = await fetch(`${API_BASE_URL}/api/admin/adminAnnouncement`, {
        method: "POST",
        body: JSON.stringify({announcement}),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include"
    });
    return response.json();
}

export const getAnnouncements = async () => {
    const response = await fetch(`${API_BASE_URL}/api/admin/adminAnnouncements`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include"
    });
    return response.json();
};

export const updateAnnouncement = async (id, announcement) => {
    const response = await fetch(`${API_BASE_URL}/api/admin/adminAnnouncement/${id}`, {
        method: "PUT",
        body: JSON.stringify(announcement),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include"
    });
    return response.json();
};

export const deleteAnnouncement = async (id) => {
    const response = await fetch(`${API_BASE_URL}/api/admin/adminAnnouncement/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include"
    });
    return response.json();
};

export const updateNest = async (userId, lessonId, courseId) => {
    const response = await fetch(`${API_BASE_URL}/api/course/complete`, {
        method: "POST",
        body: JSON.stringify({ userId, lessonId, courseId }),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include"
    });
    return response.json();
}

export const fetchProgressData = async (userId, courseId) => {
    const response = await fetch(`${API_BASE_URL}/api/course/progress/${userId}/${courseId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include"
    });
    return response.json();
};

