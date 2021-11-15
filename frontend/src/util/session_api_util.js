import axios from 'axios';

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export const signup = (data) => {
    return axios.post('/api/users/signup', data);
};

export const login = (data) => {
    return axios.post('/api/users/login', data);
};