import {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Header=({isLoggedIn})=>{

    const [showLinks,setShowLinks]=useState(false)
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const dropdownRef = useRef(null);
    

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowLinks(false);
            setShowUserDropdown(false);
          }
        };
      
        document.addEventListener('mousedown', handleClickOutside);
      
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

    const toggleLinks=(event)=>{
        event.stopPropagation(); 
        setShowLinks(!showLinks);
        setShowUserDropdown(false);
    };

    const toggleUserDropdown=(event)=>{
        event.stopPropagation(); 
        setShowUserDropdown(!showUserDropdown);
        setShowLinks(false);
    }

    const user = {
        name: "Tewodros Ayehualem",
        profilePicture: "../../image.jpg" // Path to user's profile picture
    }; 
    const usefulLinks = [
        { href: 'https://nadle.gov.et/', text: 'Ethiopian National Library (NADLE)' },
        { href: '/amu-research-database', text: 'AMU Research Database Systems' },
        { href: 'https://ocw.mit.edu/', text: 'MIT OCW' },
        { href: '/amu-digital-library', text: 'AMU Digital Library' },
        { href: '/drs', text: 'Digital Resources Share(DRS)' },
        { href: '/website', text: 'Website' }, 
        { href: '/intranet', text: 'Intranet' },
        { href: '/amu-email', text: 'AMU Email' }, 
    ];

    return(
        <header className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="logo flex items-center">
                    <img src="../../image.jpg" alt="Logo" className="h-8 mr-2" />
                    <span className="text-3xl text-white-200 font-sans">E-Learning Portal</span>
                </div>
                <nav>
                    <ul className="flex space-x-6">
                        <li ><Link to="/">Home</Link></li>
                        <li className="relative">
                            <span className="cursor-pointer flex items-center" 
                                onClick={toggleLinks}
                            > Useful Links {showLinks? '▲' : '▼'} </span>
                            {showLinks && (
                                <ul className="absolute top-full left-0 bg-white text-gray-800 rounded-md shadow-lg py-2 w-48 z-50" ref={dropdownRef}>
                                    {usefulLinks.map((link,index)=>(
                                        <li key={index} className='px-4 py-2 hover:bg-gray-100'>
                                            {link.href.startsWith('/')?(
                                                <Link to={link.href}>{link.text}</Link>
                                            ):(
                                                <a href={link.href} target='_blank' rel='noopener noreferrer'>{link.text}</a>
                                            )}
                                        </li>
                                    ))}
                                    
                                </ul>
                            )}
                        </li>
                        {isLoggedIn ? (
                             <li className="relative"> {/* User profile dropdown */}
                             <div className="flex items-center cursor-pointer" onClick={toggleLinks}>
                                 <img src={user.profilePicture} alt="Profile" className="h-8 w-8 rounded-full mr-2" />
                                 <span>{user.name}</span>
                                 <span className="cursor-pointer flex items-center" 
                                onClick={toggleUserDropdown}>▼</span> {/* Dropdown arrow */}
                             
                             {showUserDropdown && ( // Show dropdown if showLinks is true
                                 <ul className="absolute top-full right-0 bg-white text-gray-800 rounded-md shadow-lg py-2 w-48 z-50">
                                     <li className='px-4 py-2 hover:bg-gray-100'>
                                         <Link to="/profile">Profile</Link> </li>
                                     <li className='px-4 py-2 hover:bg-gray-100'>
                                         <button onClick={() => {
                                            localStorage.removeItem("authToken");
                                            window.location.reload();
                                        }}>Logout</button> {/* Logout button */}
                                     </li>
                                 </ul>
                                 
                             )}
                             </div>
                         </li>
                        ):(
                            <li>
                                <a href='/login' className="hover:text-gray-300">Login</a>
                            </li>
                        )}
                        
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;