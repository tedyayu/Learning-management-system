import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logOutUser } from '../utils/api';

const Header = ({ isLoggedIn, user, setUser }) => {
  const navigate = useNavigate();
  const [showLinks, setShowLinks] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const linksRef = useRef(null);
  const userDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (linksRef.current && !linksRef.current.contains(event.target)) {
        setShowLinks(false);
      }
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setShowUserDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    const response = await logOutUser();
    if (response.status === 200) {
      setUser(null);
      navigate('/');
    } else {
      console.log('Logout failed');
    }
  };

  const usefulLinks = [
    { href: 'https://ocw.mit.edu/', text: 'MIT OCW' },
    { href: 'https://www.wikipedia.org/', text: 'Wikipedia' },
    { href: 'https://nadle.gov.et/', text: 'Ethiopian National Library (NADLE)' },
    { href: 'https://www.researchgate.net/', text: 'Research Gate' },
  ];

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="logo flex items-center">
          <img src="../../image.jpg" alt="Logo" className="h-8 mr-2" />
          <span className="text-3xl text-white-200 font-sans">E-Learning Portal</span>
        </div>

        <nav>
          <ul className="flex space-x-6">
            <li className="relative" ref={linksRef}>
              <span
                className="cursor-pointer flex items-center"
                onClick={() => {
                  setShowLinks(!showLinks);
                  setShowUserDropdown(false);
                }}
              >
                Useful Links {showLinks ? '▲' : '▼'}
              </span>
              {showLinks && (
                <ul className="absolute top-full left-0 bg-white text-gray-800 rounded-md shadow-lg py-2 w-48 z-50">
                  {usefulLinks.map((link, index) => (
                    <li key={index} className="px-4 py-2 hover:bg-gray-100">
                      {link.href.startsWith('/') ? (
                        <Link to={link.href}>{link.text}</Link>
                      ) : (
                        <a href={link.href} target="_blank" rel="noopener noreferrer">{link.text}</a>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {isLoggedIn ? (
              <li className="relative" ref={userDropdownRef}>
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => {
                    setShowUserDropdown(!showUserDropdown);
                    setShowLinks(false);
                  }}
                >
                  <img
                    src={user.student?.profilePhotoURL}
                    alt="Profile"
                    className="h-8 w-8 rounded-full mr-2"
                  />
                  <span>{user.username}</span>
                  <span className="ml-1">▼</span>
                </div>

                {showUserDropdown && (
                  <ul className="absolute top-full right-0 mt-2 bg-white text-gray-800 rounded-md shadow-lg w-48 z-50">
                    <li className="w-full hover:bg-gray-100">
                      <Link
                    to={user.role === "INSTRUCTOR" ? "/InstractorProfilePage" : "/ProfilePage"}
                    className="block w-full px-4 py-2 text-left"
                    >
                    Profile
                    </Link>
                    </li>
                    <li className="w-full hover:bg-gray-100">
                      <button
                        onClick={handleLogout}
                        className="block w-full px-4 py-2 text-left"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            ) : (
              <li>
                <Link to="/Login-page" className="hover:text-gray-300">Login</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;