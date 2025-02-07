import  { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberUsername, setRememberUsername] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login submitted:', { username, password, rememberUsername });
    };

    return (
        <div className="min-h-screen flex">
            
            <div className=" p-0 flex justify-end ">
                <div className="bg-white p-4 rounded-lg shadow-md w-66 border-gray-700 mt-0">
                    <h2 className="text-2xl font-semibold mb-4">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-6 flex items-center">
                            <input
                                type="checkbox"
                                id="remember"
                                className="mr-2"
                                checked={rememberUsername}
                                onChange={(e) => setRememberUsername(e.target.checked)}
                            />
                            <label htmlFor="remember" className="text-gray-700">
                                Remember username
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
                                Login by AMU Email
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
