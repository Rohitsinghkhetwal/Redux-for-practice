import { createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk("createUser", async(data, {rejectWithValue}) => {
    const resp =  await fetch("https://64aacf260c6d844abededbb8.mockapi.io/fakedata", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    });
    try{
        const data = await resp.json();
        console.log(data);
        return data;


    } catch(err) {
        return rejectWithValue(err);

    }
})


export const showdata = createAsyncThunk("showitems", async({rejectWithValue}) => {

    const response = await fetch("https://64aacf260c6d844abededbb8.mockapi.io/fakedata");
    try{
        const data = await response.json();
        console.log(data);
        return data;


    }catch(err) {
        return rejectWithValue(err)

    }

})

export const DeleteData = createAsyncThunk("delete", async(id, {rejectWithValue}) => {
    const result = await fetch(`https://64aacf260c6d844abededbb8.mockapi.io/fakedata/${id}`, {
        method: "DELETE",
        
    })
    try{
        const response = result.json();
        return response;


    }catch(error) {
        return rejectWithValue(error);

    }
}) 

export const UpdateUser = createAsyncThunk("update", async(data, {rejectWithValue}) => {
    const response = await fetch(`https://64aacf260c6d844abededbb8.mockapi.io/fakedata/${data.id}`,{
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    try{
        const result = await response.json();
        return result;

    }catch(error) {
        return rejectWithValue(error);

    }
})