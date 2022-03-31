import { configureStore } from "@reduxjs/toolkit";
import contacts from './contacts/contactsSlice';
import auth from './auth/authSlice';

const store = configureStore({
    reducer: {
        contacts,
        auth,
      },
      devTools: process.env.NODE_ENV === "development",
})

console.log("store :>> ", store);

export default store;