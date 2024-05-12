import axios from 'axios';
const baseURL = 'https://complete-server-clinickhojo.onrender.com/';
const instance = axios.create({
  baseURL: `${baseURL}`
});
export default instance;
