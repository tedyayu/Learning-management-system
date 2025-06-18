import Login from '../../components/Login';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const LoginPage = () => {
  const { authToken, user, setAuthToken } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header
        className="w-full"
        isLoggedIn={!!authToken}
        user={user}
        setAuthToken={setAuthToken}
      />

      <main className="flex-grow flex items-center justify-center px-4 py-10">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">
            Login to Your Account
          </h2>
          <Login />
        </div>
      </main>

      <Footer isLoggedIn={!!user} />
    </div>
  );
};

export default LoginPage;
