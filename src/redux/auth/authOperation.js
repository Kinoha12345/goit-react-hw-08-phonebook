import {createAsyncThunk} from '@reduxjs/toolkit';
import {signUp, signIn, logOut} from '../../untils/mockApi';

export const register = createAsyncThunk('users/register', async(regInf,thunkApi) => {
    try {
        const result = await signUp(regInf)
        return result.data
    } catch (error) {
        thunkApi.rejectWithValue(error.message)
    }
})

export const login = createAsyncThunk('users/signin', async(logInf,thunkApi) => {
    try {
        const result = await signIn(logInf)
        return result.data
    } catch (error) {
        thunkApi.rejectWithValue(error.message)
    }
})

// export const exit = createAsyncThunk('users/exit', async(token, thunkApi) => {
//     try {
//         const result = await logOut(token)
//         return result.data
//     } catch (error){
//         thunkApi.rejectWithValue(error.message)
//     }
// })

export const exit = createAsyncThunk('users/exit', async(_, thunkApi) => {
    try {
        const result = await logOut()
        return result.data
    } catch (error){
        thunkApi.rejectWithValue(error.message)
    }
})