import  { useState,useEffect ,useContext} from 'react';
import {useNavigate} from 'react-router-dom'
import {loginUser} from '../utils/api'
import  {AuthContext }  from '../context/AuthContext'

const AdminPassword=import.meta.env.VITE_ADMIN_PASSWORD;
const AdminUsername=import.meta.env.VITE_ADMIN_USERNAME;


const Login = () => {
    const {setAuthToken,setUser}=useContext(AuthContext);
    const [formData, setFormData]=useState({username:"",password:""})
    const [error,setError]=useState('');
    const [rememberedUsername, setRememberUsername] = useState(false);
    const navigate=useNavigate();

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        const savedUsername=localStorage.getItem("rememberedUsername")
        if(savedUsername){
            setFormData(prevState=>({...prevState,username:savedUsername}))
            setRememberUsername(true)
        }
    },[]);
    

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError('')
                
                try {
                    if(formData.username==AdminUsername && formData.password==AdminPassword){
                        navigate('/AdminDashboard')
                    }
                    const response= await loginUser(formData);
                    if (response.error){
                        console.error("Error while logingin", error)
                        setError(error.message);
                    } else {
                        console.log('Login successful:');
                        setAuthToken(response.token);
                        setUser(response.user);
                        localStorage.setItem("authToken",response.token)
                        localStorage.setItem("user",JSON.stringify( response.user))
                        console.log(response.user)
                        console.log(response.token)
                        if (rememberedUsername) {
                            localStorage.setItem("rememberedUsername", formData.username);
                        } else {
                            localStorage.removeItem("rememberedUsername");
                        }
                        navigate("/")
                    }
                } catch (error) {
                    console.error("login error", error);
                    setError("An unexpected error occurred. Please try again.");
                }
    };

    return (
        <div className="min-h-screen flex">
            
            <div className=" p-0 flex justify-end ">
                <div className="bg-white p-4 rounded-lg shadow-md w-66 border-gray-700 mt-0">
                    <h2 className="text-2xl font-semibold mb-4">Login</h2>
                    {error&& <div className="alert alert-danger">{error}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
                                Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-6 flex items-center">
                            <input
                                type="checkbox"
                                name="remember"
                                className="mr-2"
                                checked={rememberedUsername}
                                onChange={(e) => setRememberUsername(e.target.checked)}
                            />
                            <label htmlFor="remember" className="text-gray-700">
                                Remember Username
                            </label>
                        </div>
                        <div className="mb-6">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Log in
                            </button>
                        </div>
                        <div className="mb-4 text-center">
                            <a href="#" className="text-blue-500 hover:underline">Lost password?</a>
                        </div>
                        <div>
                            <p className="text-center text-gray-700 mb-2">Or log in using your account on:</p>
                            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-gray-300">
                                Login As Admin
                            </button>
                        </div> 
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
