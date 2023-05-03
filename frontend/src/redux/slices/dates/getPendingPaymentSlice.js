import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    success: false,
    pendingPaymentData: []
};

export const getPendingPaymentSlice = createSlice({
    name: 'getPendingPaymentSlice',
    initialState,
    reducers: {
        fetchGetPendingPayment: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        },
        fetchGetPendingPaymentSuccess: (state, action) => {
            state.loading = null,
                state.error = null,
                state.success = true;
            state.pendingPaymentData = action.payload;
        },
        fetchGetPendingPaymentFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
   fetchGetPendingPayment,fetchGetPendingPaymentFailure,fetchGetPendingPaymentSuccess
} = getPendingPaymentSlice.actions;