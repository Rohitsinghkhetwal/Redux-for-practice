import { configureStore } from "@reduxjs/toolkit";
import users from "./UserSlice"
import AsyncUsers  from "./ApiSlice";


const Store = configureStore({
    reducer: {
        userReducer: users,
        apis: AsyncUsers

        
    }
})

export default Store;

