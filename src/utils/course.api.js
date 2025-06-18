const API_BASE_URL = "http://localhost:5001";

export const createCourse = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/course/createCourse`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      credentials: "include"
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
      },
      credentials: "include"
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
      credentials: "include"
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

export const deleteCourse = async (courseId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/course/deleteCourse/${courseId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: "include"
    });
    if (!response.ok) {
      throw new Error('Failed to delete course');
    }
    return await response.json();
  } catch (error) {
    console.error('There was an error deleting the course!', error);
    throw error;
  }
}

export const assignInstractor = async (courseId, instractorId) => {
  try {
      const response = await fetch(`${API_BASE_URL}/api/course/assignInstractor/${courseId}/${instractorId}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json"
          },
          credentials: "include"
      });
      return response.json();
  } catch (error) {
      console.error("Login error occured:", error);
      throw error;
  }
}

export const enrollStudents = async (selectedStudents, courseId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/course/enrollStudents`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ selectedStudents, courseId }),
      credentials: "include"
    });
    return await response.json();
  } catch (error) {
    console.error('There was an error enrolling students!', error);
    throw error;
  }
}

export const fetchEnrolledUsers = async (courseId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/course/${courseId}/enrolledUsers`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: "include"
    });
    return await response.json();
  } catch (error) {
    console.error('There was an error fetching the enrolled users!', error);
    throw error;
  }
};

export const createChapter = async (courseId, chapterData) => {
  console.log("course if from frontend api", courseId);
  try {
    const response = await fetch(`${API_BASE_URL}/api/course/${courseId}/createChapter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(chapterData),
      credentials: "include"
    });
    if (!response.ok) {
      throw new Error('Failed to create chapter');
    }
    return await response.json();
  } catch (error) {
    console.error('There was an error creating the chapter!', error);
    throw error;
  }
};

export const deleteChapter = async (chapterId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/course/deleteChapter/${chapterId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: "include"
    });
    if (!response.ok) {
      throw new Error('Failed to delete chapter');
    }
    return await response.json();
  } catch (error) {
    console.error('There was an error deleting the chapter!', error);
    throw error;
  }
}

export const createLesson = async (lessonData, chapterId) => {

  console.log("lesson data from frontend api", lessonData);
  console.log("chapter id from frontend api", chapterId);
  
  try {
    
    const response = await fetch(`${API_BASE_URL}/api/course/${chapterId}/createLesson`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(lessonData),
      credentials: "include"
    });
    if (!response.ok) {
      throw new Error('Failed to create lesson');
    }
    return await response.json();
  } catch (error) {
    console.error('There was an error creating the lesson!', error);
    throw error;
  }
};

export const updateLesson = async (lessonId, lessonData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/course/updateLesson/${lessonId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(lessonData),
      credentials: "include"
    });
    if (!response.ok) {
      throw new Error('Failed to update lesson');
    }
    return await response.json();
  } catch (error) {
    console.error('There was an error updating the lesson!', error);
    throw error;
  }
};

export const deleteLesson = async (lessonId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/course/deleteLesson/${lessonId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: "include"
    });
    if (!response.ok) {
      throw new Error('Failed to delete lesson');
    }
    return await response.json();
  } catch (error) {
    console.error('There was an error deleting the lesson!', error);
    throw error;
  }
}

