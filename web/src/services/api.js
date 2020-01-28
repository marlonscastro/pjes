import axios from 'axios';

const api = axios.create({
    baseURL: 'htt://localhost:3000'
});

export default api;