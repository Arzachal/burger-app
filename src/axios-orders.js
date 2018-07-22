import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://react-burger-builder-67ce2.firebaseio.com/'
});

export default axiosInstance;