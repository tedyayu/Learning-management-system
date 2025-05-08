import { createContext, useState, useEffect ,useContext} from 'react';
import { getInstarctor ,getSingleInstarctor} from '../utils/instractor.api';
import {AuthContext} from './AuthContext';

export const InstractorContext = createContext();


export const InstractorProvider = ({ children }) => {
  const [instractors, setInstractors] = useState([]);
  const [singleInstractor, setSingleInstractor] = useState(null);

  const {user}=useContext(AuthContext);


  useEffect(() => {
    const fetchInstractor = async () => {
      try {
        const data = await getInstarctor();
        setInstractors(data);       
      } catch (error) {
        console.error('There was an error fetching the Instractors!', error);
      } 
    };
    const fetchSingleInstractor = async () => {
      try {
        const data = await getSingleInstarctor(user?.id);
        setSingleInstractor(data); 
        console.log("setSingleInstractor data is ",data);      
      } catch (error) {
        console.error('There was an error fetching the Instractors!', error);
      } 
    };
    fetchSingleInstractor();
    fetchInstractor();
  }, []);
  

  return (
    <InstractorContext.Provider value={{ instractors, setInstractors ,singleInstractor}}>
      {children}
    </InstractorContext.Provider>
  );
};