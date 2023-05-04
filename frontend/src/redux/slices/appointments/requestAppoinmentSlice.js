import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    success: false,
    requestAData: {}
};

export const requestAppointmentSlice = createSlice({
    name: 'requestAppointmentSlice',
    initialState,
    reducers: {
        fetchrequestAppointment: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        },
        fetchRequestAppointmentSuccess: (state, action) => {
            state.loading = false,
                state.error = false,
                state.success = true;
            state.requestAData = action.payload;
        },
        fetchRequestAppointmentFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
fetchRequestAppointmentFailure,fetchRequestAppointmentSuccess,fetchrequestAppointment
} = requestAppointmentSlice.actions;