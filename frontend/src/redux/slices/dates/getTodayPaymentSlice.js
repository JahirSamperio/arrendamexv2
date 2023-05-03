import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    success: false,
    todayPaymentData: []
};

export const getTodayPaymentSlice = createSlice({
    name: 'getTodayPaymentSlice',
    initialState,
    reducers: {
        fetchGetTodayPaymentDate: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        },
        fetchGetTodayPaymentSuccess: (state, action) => {
            state.loading = null,
                state.error = null,
                state.success = true;
            state.todayPaymentData = action.payload;
        },
        fetchGetTodayPaymentFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
    fetchGetTodayPaymentDate,fetchGetTodayPaymentFailure,fetchGetTodayPaymentSuccess
} = getTodayPaymentSlice.actions;