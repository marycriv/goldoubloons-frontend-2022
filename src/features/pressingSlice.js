import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const pressingSlice = createSlice({
    name: "pressings",
    initialState:{
        pressings: null
    },
    reducers:{
        getAll: (state, action) => {
            state.pressings = action.payload;
            axios.get('http://localhost:3010/api/v1/pressings', pressingFetch)
            .then(response => console.log(response.data.pressings));
        }
    }
})

export const { getAll } = pressingSlice.actions;

export const selectPressing = (state) => state.pressings.pressings;

export default pressingSlice.reducer;