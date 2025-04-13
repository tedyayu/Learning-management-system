import { createContext, useState, useEffect } from 'react';
import { getInstarctor } from '../utils/instractor.api';

export const InstractorContext = createContext();

export const InstractorProvider = ({ children }) => {
  const [instractors, setInstractors] = useState([]);

  useEffect(() => {
    const fetchInstractor = async () => {
      try {
        const data = await getInstarctor();
        setInstractors(data);       
      } catch (error) {
        console.error('There was an error fetching the Instractors!', error);
      } 
    };

    fetchInstractor();
  }, []);
  

  return (
    <InstractorContext.Provider value={{ instractors, setInstractors }}>
      {children}
    </InstractorContext.Provider>
  );
};