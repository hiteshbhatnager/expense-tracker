import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    user: null,
    status: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.status = true;
        },
        logout: (state, action) => {
            state.user = null;
            state.status = false;
        }
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer