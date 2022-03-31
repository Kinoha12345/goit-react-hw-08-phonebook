import { createSlice } from '@reduxjs/toolkit';
import {register, login, exit} from './authOperation';
// import { useDispatch } from 'react-redux';
// const dispatch = useDispatch();

const userSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
        // name: localStorage.getItem('name'),
        isLogedIn: JSON.parse(localStorage.getItem('isOnline')),
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
        // REGISTER
        [register.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [register.fulfilled]: (state, {payload}) => {
            localStorage.setItem('token', payload.token)
            localStorage.setItem('name', payload.user.name)
            localStorage.setItem('isOnline', JSON.stringify(true))
            state.isLoading = false;
             state.user.isLogedIn = true;
            state.idToken = payload.token;
        },
        [register.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        },
        // LOGIN
        [login.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
            
          },
          [login.fulfilled]: (state, { payload }) => {
            localStorage.setItem('token', payload.token)
            localStorage.setItem('name', payload.user.name)
            localStorage.setItem('isOnline', JSON.stringify(true))
            state.isLoading = false;
            // state.user.name = payload.user.name;
            
            state.user.isLogedIn = true;
            state.idToken = payload.token;
          },
          [login.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
          },
          // EXIT
          [exit.pending]: (state) => {
              state.isLoading = true;
              state.error = null;
            //   state.user.isLogedIn = false;
          },
          [exit.fulfilled]: (state, { peyload }) => {
              localStorage.setItem('isOnline', JSON.stringify(false));
              localStorage.removeItem('name');
              localStorage.removeItem('token');
              console.log();
              state.isLoading = false;
            //   state.user.name = peyload.user.name;
              state.user.isLogedIn = false;
          },
          [exit.rejected]: (state, { peyload }) => {
              state.isLoading = false;
              state.error = peyload;
              state.idToken = null;
          }
    }
})


export default userSlice.reducer;