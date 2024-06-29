import axios from 'axios';

const api = axios.create({
    baseURL: 'https://indiki.onrender.com/'
})

export default api;