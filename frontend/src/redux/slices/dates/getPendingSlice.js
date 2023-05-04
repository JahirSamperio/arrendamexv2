import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    success: false,
    pendingData: {}
};

export const getPendingSlice = createSlice({
    name: 'getPendingSlice',
    initialState,
    reducers: {
        fetchGetPending: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        },
        fetchGetPendingSuccess: (state, action) => {
            state.loading = null,
                state.error = null,
                state.success = true;
            state.pendingData = action.payload;
        },
        fetchGetPendingFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
  fetchGetPending,fetchGetPendingFailure,fetchGetPendingSuccess
} = getPendingSlice.actions;