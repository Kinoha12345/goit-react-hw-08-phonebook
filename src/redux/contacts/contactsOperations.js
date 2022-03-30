import {createAsyncThunk} from '@reduxjs/toolkit';
import {getContact,postContact,deleteContact} from '../../untils/mockApi';

export const getContacts =  createAsyncThunk('get/contacts',async (_,thunkApi)=> {
    try {
       const result = await getContact()
      return result.data
       
    } catch (error) {
        thunkApi.rejectWithValue(error.message)  
    }
})
export const addContact = createAsyncThunk('contacts/add',async(contact,thunkApi)=>{
    try {
       const result = await postContact(contact)
       return result.data
    } catch (error) {
        thunkApi.rejectWithValue(error.message)  
    }
})
export const removeContacts = createAsyncThunk('contacts/remove',async(id,thunkApi)=>{
    try {
        const result = await deleteContact(id)
        return result.data
    } catch (error) {
        thunkApi.rejectWithValue(error.message)
    }
})