import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    success: false,
    paymentData: []
};

export const paymentSlice = createSlice({
    name: 'paymentSlice',
    initialState,
    reducers: {
        fetchPayment: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        },
        fetchPaymentSuccess: (state, action) => {
            state.loading = null,
                state.error = null,
                state.success = true;
            state.paymentData = action.payload;
        },
        fetchPaymentFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
    fetchPayment,fetchPaymentFailure,fetchPaymentSuccess
} = paymentSlice.actions;