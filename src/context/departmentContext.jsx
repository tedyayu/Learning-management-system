import { createContext, useState, useEffect } from 'react';
import { fetchDepartments } from '../utils/departement.api';

export const DepartmentContext = createContext();

export const DepartmentProvider = ({ children }) => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const getDepartments = async () => {
      try {
        const data = await fetchDepartments();
        setDepartments(data);
      } catch (error) {
        console.error('There was an error fetching the departments!', error);
      } 
    };

    getDepartments();
  }, []);
  

  return (
    <DepartmentContext.Provider value={{ departments, setDepartments }}>
      {children}
    </DepartmentContext.Provider>
  );
};