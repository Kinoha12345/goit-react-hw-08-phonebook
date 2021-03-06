import axios from 'axios';
// https://connections-api.herokuapp.com/

export const signUp = (regInf) => {
    axios.defaults.baseURL = 'https://connections-api.herokuapp.com'
    return axios.post('/users/signup', regInf)
}

export const signIn = (logInf) => {
    axios.defaults.baseURL = 'https://connections-api.herokuapp.com'
    return axios.post('/users/login', logInf)
}

// export const logOut = (token) => {
//     axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//     return axios.post('/users/logout', token)
// }

export const logOut = () => {
    axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return axios.post('/users/logout')
}

// export const getContact = ()=>{
//     axios.defaults.baseURL = 'https://621395ac89fad53b1ff9e7b3.mockapi.io'
//     return axios.get('/contacts')
// }
// export const postContact= (contact)=>{
//     axios.defaults.baseURL = 'https://621395ac89fad53b1ff9e7b3.mockapi.io'
// return axios.post('/contacts',contact)
// }

// export const deleteContact = (id)=>{
//     axios.defaults.baseURL = 'https://621395ac89fad53b1ff9e7b3.mockapi.io'
//     return axios.delete(`/contacts/${id}`)
// }

export const getContact = ()=>{
    axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return axios.get('/contacts')
}
export const postContact= (contact)=>{
    axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;
return axios.post('/contacts',contact)
}

export const deleteContact = (id)=>{
    axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return axios.delete(`/contacts/${id}`)
}
