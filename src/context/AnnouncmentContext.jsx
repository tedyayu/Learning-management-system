import { createContext, useState, useEffect } from 'react';
import { getAnnouncements } from '../utils/api.js';

export const AnnouncementContext = createContext();

export const AnnouncementProvider = ({ children }) => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const getAnnouncementsData = async () => {
      try {
        const data = await getAnnouncements();
        console.log(data);
        setAnnouncements(data);
      } catch (error) {
        console.error('There was an error fetching the announcements!', error);
      }
    };

    getAnnouncementsData();
  }, []);

  return (
    <AnnouncementContext.Provider value={{ announcements, setAnnouncements }}>
      {children}
    </AnnouncementContext.Provider>
  );
};