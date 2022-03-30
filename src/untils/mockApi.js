import axios from 'axios';

axios.defaults.baseURL = 'https://621395ac89fad53b1ff9e7b3.mockapi.io'

export const getContact = ()=>{
    return axios.get('/contacts')
}
export const postContact= (contact)=>{
return axios.post('/contacts',contact)
}

export const deleteContact = (id)=>{
    return axios.delete(`/contacts/${id}`)
}