import axios from 'axios';
import {
    LOGIN_USER, // eslint-disable-line no-unused-vars
    REGISTER_USER, // eslint-disable-line no-unused-vars
    AUTH_USER  // eslint-disable-line no-unused-vars
} from './types';

export function loginUser(dataToSubmit) {
   const request =  axios.post('/api/users/login', dataToSubmit)
    .then(response => request.data)
    
    return {
        type: "LOGIN_USER",
        payload: request
    }
}

export function registerUser(dataToSubmit) {
    const request =  axios.post('/api/users/register', dataToSubmit)
     .then(response => request.data)
     
     return {
         type: "REGISTER_USER",
         payload: request
     }
 }

 export function auth() {
    const request =  axios.get('/api/users/auth')
     .then(response => request.data)
     
     return {
         type: "AUTH_USER",
         payload: request
     }
 }