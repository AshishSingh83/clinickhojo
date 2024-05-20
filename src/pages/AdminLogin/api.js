import axios from 'axios';
const apiClient = axios.create({
  baseURL: 'https://complete-server-clinickhojo.onrender.com', 
  withCredentials: true, 
});
export default apiClient;
