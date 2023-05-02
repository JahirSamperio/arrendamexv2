import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: null,
    error: null,
    success: null,
    dataUserEdit: []
};

export const loginUserSlice = createSlice({
    name: 'editUserSlice',
    initialState,
    reducers: {
        fetchEditUser: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        },
        fetchEitUserSuccess: (state, action) => {
            state.loading = false,
                state.error = false,
                state.success = true;
            state.dataUserEdit= action.payload;
        },
        fetchEditUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
    fetchEditUser,
    fetchEditUserFailure,
    fetchEditUserSuccess
} = editUserSlice.actions;