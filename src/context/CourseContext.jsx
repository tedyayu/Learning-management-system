import { createContext, useState, useEffect } from 'react';
import { fetchCourses } from '../utils/course.api';

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const data = await fetchCourses();
        console.log(data);
        setCourses(data);
      } catch (error) {
        console.error('There was an error fetching the courses!', error);
      }
    };

    getCourses();
  }, []);

  return (
    <CourseContext.Provider value={{ courses, setCourses }}>
      {children}
    </CourseContext.Provider>
  );
};