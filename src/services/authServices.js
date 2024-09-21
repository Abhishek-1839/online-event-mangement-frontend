import axios from 'axios';

const authServices = {
  logout: () => {
    // This will trigger the backend to clear the JWT cookie
    return axios.post('/auth/logout');
  }
};

export default authServices;
