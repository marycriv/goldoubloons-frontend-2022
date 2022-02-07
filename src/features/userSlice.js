import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const userSlice = createSlice({
    name: "user",
    initialState:{
        user:null
    },
    reducers:{
        
        login: (state, action) => {
            state.user = action.payload;
            const userFetch = {
                user: {
                    username: action.payload.username,
                    password: action.payload.password
                }
            }
            axios.post('http://localhost:3010/api/v1/login', userFetch)
            .then(response => console.log(response.data.user));
        },

        logout: (state) => {
            console.log("logout")
            axios.post('http://localhost:3010/api/v1/logout')
            .then(response => console.log(response));
            state.user = null;
        }
    }
})

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;