// write subscribe reducer

import { createSlice } from "@reduxjs/toolkit";

const subscribeSlice = createSlice({
    name: "subscribe",
    initialState: {
        form: {
            fullName: "",
            email: "",
            phone: "",
            carBrand: "",
            carModel: "",
            date: "",
            time: "",
        },
        status: {
            loading: false,
            error: false,
            success: false,
            message: "",
        }
    },
    reducers: {
        subscribe(state, action) {
            state.form = action.payload
        },
    },
});

export const { subscribe } = subscribeSlice.actions;
export default subscribeSlice.reducer;