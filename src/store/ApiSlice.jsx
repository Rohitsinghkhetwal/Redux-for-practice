import {  createSlice, } from "@reduxjs/toolkit";
import { DeleteData, createUser } from "./ApiOperation";
import { showdata } from "./ApiOperation";

export const AsyncUsers = createSlice({
    name: "apiusers",
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(createUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(createUser.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(createUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(showdata.pending, (state) => {
            state.loading = true,
            state.error = null
        })
        .addCase(showdata.fulfilled, (state,action) => {
            state.loading = false,
            state.data = action.payload
        })
        .addCase(showdata.rejected, (state , action) => {
            state.loading = false,
            state.error = action.error.message

        } )
        .addCase(DeleteData.pending, (state) => {
            state.loading = true
        })
        .addCase(DeleteData.fulfilled, (state, action) =>  {
            state.loading = false;
            const { id } = action.payload;
            if(id) {
                state.data = state.data.filter((element) => element.id !== id)
            }
        })
        .addCase(DeleteData.rejected, (state, action) => {
            state.loading = false,
            state.error = action.payload;
        })
    }
   
})


export default AsyncUsers.reducer