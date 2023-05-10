import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    success: false,
    payItemData: []
};

export const paymentToDoSlice = createSlice({
    name: 'paymentToDoSlice',
    initialState,
    reducers: {
        fetchGetToDoPayment: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        },
        fetchGetToDoPaymentSuccess: (state, action) => {
            state.loading = null,
                state.error = null,
                state.success = true;
            state.payItemData = action.payload;
        },
        fetchGetToDoPaymentFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
    fetchGetToDoPayment,fetchGetToDoPaymentFailure,fetchGetToDoPaymentSuccess
} = paymentToDoSlice.actions;