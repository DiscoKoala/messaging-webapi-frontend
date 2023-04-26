import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://messaging-app-backend-qu9x.onrender.com'
});
export default instance;
