import { createSlice } from '@reduxjs/toolkit';
import {getContacts, addContact, removeContacts} from './contactsOperations'

const itemsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        filter: '',
        isLoading: false
        },
        reducers: {
            filterValue(state, action) {
                return {
                    ...state,
                    filter: action.payload
                    }
                },
            },
    extraReducers: {
        // add
        [addContact.pending]: (state) => ({
            ...state,
            isLoading: true,
        }),
        [addContact.fulfilled]: (state, { payload }) => ({
            ...state,
            items: [...state.items, payload],
            isLoading: false,
        }),
        [addContact.rejected]: (state) => ({
            ...state,
            isLoading: false,
        }),
        //get
        [getContacts.pending]: (state) => ({
            ...state,
            isLoading: true,
        }),
        [getContacts.fulfilled]: (state, { payload }) => ({
            ...state,
            items: payload,
            isLoading: false,
        }),
        [getContacts.rejected]: (state) => ({
            ...state,
            isLoading: false,
        }),
        //remove
        [removeContacts.pending]: (state) => ({
            ...state,
            isLoading: true,
        }),
        [removeContacts.fulfilled]: (state, { payload }) => ({
            ...state,
            items: state.items.filter((el) => el.id !== payload.id),
            isLoading: false,
        }),
        [removeContacts.rejected]: (state) => ({
            ...state,
            isLoading: false,
        }),
    }
})


export const { filterValue } = itemsSlice.actions;
export default itemsSlice.reducer;
