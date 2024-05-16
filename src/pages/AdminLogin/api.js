import axios from 'axios';
const apiClient = axios.create({
  baseURL: 'https://complete-server-clinickhojo.onrender.com', // Use the environment variable for the base URL
  withCredentials: true, 
});
export default apiClient;
