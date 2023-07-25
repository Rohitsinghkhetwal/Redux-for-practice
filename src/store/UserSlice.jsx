import { createSlice } from "@reduxjs/toolkit";

const users = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action){
            
            state.push(action.payload);
        },
        removeUser(state, action){
            state.splice(action.payload, 1);
            
        },
        removeAllUser(){
           
            return [];
            

        }

    },
})


export const {addUser, removeUser, removeAllUser} = users.actions

export default users.reducer;