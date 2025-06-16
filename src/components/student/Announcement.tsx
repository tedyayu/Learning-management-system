import  { useContext }   from 'react'
import {AnnouncementContext} from '../../context/AnnouncmentContext';
import {useNavigate} from 'react-router-dom';

type AnnouncementType = {
  title: string;
  content: string;
  createdAt: string;
};

type AnnouncementContextType = {
  announcements: AnnouncementType[];
};

const Announcement = () => {
    const { announcements } = useContext(AnnouncementContext as React.Context<AnnouncementContextType>);
    const navigate = useNavigate();
    
    return (
      <div className="announcement-component max-w-x5 bg-white p-4 rounded-lg border border-gray-300 mt-4  overflow-y-auto">
        <h3 className="text-lg font-semibold mb-2">Latest announcements</h3>
        <ul>
          {announcements.map((announcement , index) => (
            <li key={index} className="mb-4">
              <p className="text-sm text-gray-500">{announcement.createdAt}</p>
              <p className="font-medium">E-learning Administrator</p>
              <p className="text-blue-600 hover:underline" onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    const el = document.getElementById("site-news-section");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }, 100); 
                }}>
                {announcement.title}
              </p>
            </li>
          ))}
        </ul>
        <a href="#" className="text-blue-600 hover:underline">Older topics ...</a>
      </div>
    );
}

export default Announcement;
        