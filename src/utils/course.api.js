const API_BASE_URL = "http://localhost:5001";

export const createCourse = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/course/createCourse`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error('Failed to create the course');
    }
    return await response.json();
  } catch (error) {
    console.error('There was an error creating the course!', error);
    throw error;
  }
};

export const fetchCourses = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/course/getCourses`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch courses');
    }
    return await response.json();
  } catch (error) {
    console.error('There was an error fetching the courses!', error);
    throw error;
  }
}

export const fetchSingleCourse = async (courseId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/course/getSingleCourse/${courseId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch course');
    }
    return await response.json();
  } catch (error) {
    console.error('There was an error fetching the course!', error);
    throw error;
  }
}
export const assignInstractor = async (courseId, instractorId) => {
  try {
      const response = await fetch(`${API_BASE_URL}/api/course/assignInstractor/${courseId}/${instractorId}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json"
          }
      });
      return response.json();
  } catch (error) {
      console.error("Login error occured:", error);
      throw error;
  }
}