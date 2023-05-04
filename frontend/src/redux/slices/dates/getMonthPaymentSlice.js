import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    success: false,
    monthPaymentData: {}
};

export const getMonthPaymentSlice = createSlice({
    name: 'getMonthPaymentSlice',
    initialState,
    reducers: {
        fetchGetMonthPayment: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        },
        fetchGetMonthPaymentSuccess: (state, action) => {
            state.loading = null,
                state.error = null,
                state.success = true;
            state.monthPaymentData = action.payload;
        },
        fetchGetMonthPaymentFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
    fetchGetMonthPayment,fetchGetMonthPaymentFailure,fetchGetMonthPaymentSuccess
} = getMonthPaymentSlice.actions;