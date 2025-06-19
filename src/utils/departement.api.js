const API_BASE_URL = "https://afro-lang-backend.onrender.com";

export const fetchDepartments = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/department/all`,{
        method:"GET",
        credentials: "include"
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('There was an error fetching the departments!', error);
      throw error;
    }
  };

  export const createDepartment = async (formData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/department/createDepartment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify(formData),
        credentials: "include"
      });
      console.log(response);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('There was an error creating the department!', error);
      throw error;
    }
  };

export const fetchDepartementByTerm = async (term) => {    
    try {
        const response = await fetch(`${API_BASE_URL}/api/department/search?query=${term}`,{
           method:"GET",
           credentials: "include"
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('There was an error fetching the departments!', error);
        throw error;
    }
};

export const deleteDepartment = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/department/delete/${id}`, {
        method: 'DELETE',
        credentials: "include"
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('There was an error deleting the department!', error);
      throw error;
    }
};

export const updateDepartment = async (id, updatedData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/department/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
      credentials: "include"
    });
    if (!response.ok) {
      throw new Error('Failed to update the department');
    }
    return await response.json();
  } catch (error) {
    console.error('There was an error updating the department!', error);
    throw error;
  }
};

export const publishDepartment = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/department/publish/${id}`, {
      method: 'PUT',
      credentials: "include"
    });
    if (!response.ok) {
      throw new Error('Failed to publish the department');
    }
    return await response.json();
  } catch (error) {
    console.error('There was an error publishing the department!', error);
    throw error;
  }
};

export const unPublishDepartment = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/department/unpublish/${id}`, {
      method: 'PUT',
      credentials: "include"
    });
    if (!response.ok) {
      throw new Error('Failed to unpublish the department');
    }
    return await response.json();
  } catch (error) {
    console.error('There was an error unpublishing the department!', error);
    throw error;
  }
};