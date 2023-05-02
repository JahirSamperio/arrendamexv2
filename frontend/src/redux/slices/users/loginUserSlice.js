import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: null,
    error: null,
    success: null,
    loginData: []
};

export const loginUserSlice = createSlice({
    name: 'loginUserSlice',
    initialState,
    reducers: {
        fetchLoginUser: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        },
        fetchLoginSuccess: (state, action) => {
            state.loading = false,
                state.error = false,
                state.success = true;
            state.loginData = action.payload;
        },
        fetchLoginFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
    fetchLoginUser,
    fetchLoginSuccess,
    fetchLoginFailure
} = loginUserSlice.actions;