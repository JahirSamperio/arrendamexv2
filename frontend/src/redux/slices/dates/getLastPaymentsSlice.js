import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    success: false,
    lastPaymentData: []
};

export const getLastPaymentSlice = createSlice({
    name: 'getLastPaymentSlice',
    initialState,
    reducers: {
        fetchGetLastPayments: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        },
        fetchGetLastPaymentsSuccess: (state, action) => {
            state.loading = null,
                state.error = null,
                state.success = true;
            state.dateData = action.payload;
        },
        fetchGetLastPaymentsFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
    fetchGetLastPayments,fetchGetLastPaymentsFailure,fetchGetLastPaymentsSuccess
} = getLastPaymentSlice.actions;