import { createSlice } from '@reduxjs/toolkit';
import {register, login} from './authOperation';

const userSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
        email: "",
        isLogedIn: false,
      },
      idToken: null,
      isLoading: false,
      error: null,
    },
    
    reducers: {
        setToken(state, {payload}) {
            state.idToken = payload;
        },  
    },
    extraReducers: {
        [register.pending]: (state) => {
            state.isLoading = true;
            
            state.error = null;
        },
        [register.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.user.email = payload.email;
            state.user.isLogedIn = true;
            state.idToken = payload.idToken;
        },
        [register.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        },
        [login.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
          },
          [login.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.user.email = payload.email;
            state.user.isLogedIn = true;
            state.idToken = payload.idToken;
          },
          [login.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
          },
    }
})


export default userSlice.reducer;