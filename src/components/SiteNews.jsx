import { useContext} from 'react';
import {AnnouncementContext} from '../context/AnnouncmentContext';

const SiteNews = () => {
  const { announcements } = useContext(AnnouncementContext);

  
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">E-Learning Administrator News</h2>
      <div className="space-y-4">
        {announcements.map((announcement, index) => (
          <div key={index} className="border rounded p-4 shadow">
            <h3 className="text-xl font-semibold mb-2">{announcement.title}</h3>
            <div className="text-gray-600 mb-2">
              <span>by E-Learning Administrator</span> | <span>{announcement.createdAt}</span>
            </div>
            <p className="mb-2">{announcement.content}</p>
      
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default SiteNews;