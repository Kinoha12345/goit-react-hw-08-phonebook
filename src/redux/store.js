import { configureStore } from "@reduxjs/toolkit";
import contacts from './contacts/contactsSlice';

const store = configureStore({
    reducer: {
        contacts,
      },
      devTools: process.env.NODE_ENV === "development",
})


console.log("store :>> ", store);

export default store;