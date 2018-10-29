import axios from 'axios';
import {BASE_URL, AUTH_TOKEN_KEY} from '../settings';


export const getAuthHeader = () => {
    const token = window.localStorage.getItem(AUTH_TOKEN_KEY);
    if (!token) return null;

    return {
        'Authorization': `Token ${token}`
    };
};

export const httpClient = axios.create({
    baseURL: BASE_URL,
    timeout: 1000
});
