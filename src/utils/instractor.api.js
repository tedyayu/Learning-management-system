const API_BASE_URL = "http://localhost:5001";


export const getInstarctor = async () => {
    const instractor = await fetch(`${API_BASE_URL}/api/instractor/all`);
    return instractor.json();
}
export const getSingleInstarctor = async (id) => {
    const instractor = await fetch(`${API_BASE_URL}/api/instractor/${id}`);
    return instractor.json();
}
export const registerInstractor = async (credentials)=>{
    const response=await fetch (`${API_BASE_URL}/api/instractor/registerInstractor`,{
        method:"POST",
        body:JSON.stringify(credentials),
        headers:{
            "Content-Type":"application/json"
        }
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
            }
        });
        return response.json();
    } catch (error) {
        console.error("Login error occured:", error);
        throw error;
    }
}

