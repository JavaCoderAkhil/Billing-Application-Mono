import axios from "axios";
 
const BASE_URL = "http://172.20.100.7:9999"; 
 
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};
 
export const UserSignUpService = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/users/saveuser`, data);
    return response.data;
  } catch (error) {
    console.error("User Sign Up Error:", error);
    throw error;
  }
};
 
export const UserLoginService = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/users/authenticate`, data);
    return response.data;
  } catch (error) {
    console.error("User Login Error:", error);
    throw error;
  }
};
 
export const awsService = async (service, startDate, endDate, months) => {
  try {
    let endpoint = '/api/aws/details';
 
    if (service && startDate && endDate) {
      endpoint += `?service=${service}&startDate=${startDate}&endDate=${endDate}`;
    } else if (service && months) {
      endpoint += `?service=${service}&months=${months}`;
    } else if (startDate && endDate) {
      endpoint += `?startDate=${startDate}&endDate=${endDate}`;
    } else if (months) {
      endpoint += `?months=${months}`;
    } else {
      throw new Error('Invalid parameters');
    }


    const response = await axios.get(`${BASE_URL}${endpoint}`, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error("AWS Service Error:", error);
    throw error; 
  }
};
 
export const gcpService = async (serviceDescription, startDate, endDate, months) => {
  try {
    let endpoint = '/api/gcp/details';
 
    if (serviceDescription && startDate && endDate) {
      endpoint += `?serviceDescription=${serviceDescription}&startDate=${startDate}&endDate=${endDate}`;
    } else if (serviceDescription && months) {
      endpoint += `?serviceDescription=${serviceDescription}&months=${months}`;
    } else if (startDate && endDate) {
      endpoint += `?startDate=${startDate}&endDate=${endDate}`;
    } else if (months) {
      endpoint += `?months=${months}`;
    } else {
      throw new Error('Invalid parameters');
    }
 
    const response = await axios.get(`${BASE_URL}${endpoint}`, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error('Gcp Service Error:', error);
    throw error;
  }
};
 
 
 
export const azureService = async (ResourseType, startDate, endDate, months) => {
  try {
    let endpoint = '/api/azure/details';
 
    if (ResourseType && startDate && endDate) {
      endpoint += `?ResourseType=${ResourseType}&startDate=${startDate}&endDate=${endDate}`;
    } else if (ResourseType && months) {
      endpoint += `?ResourseType=${ResourseType}&months=${months}`;
    } else if (startDate && endDate) {
      endpoint += `?startDate=${startDate}&endDate=${endDate}`;
    } else if (months) {
      endpoint += `?months=${months}`;
    } else {
      throw new Error('Invalid parameters');
    }
 
    const response = await axios.get(`${BASE_URL}${endpoint}`, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error('Azure Service Error:', error);
    throw error;
  }
};
