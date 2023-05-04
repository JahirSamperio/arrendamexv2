import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    success: false,
    appointmentData: {}
};

export const acceptAppointmentSlice = createSlice({
    name: 'acceptAppointmentSlice',
    initialState,
    reducers: {
        fetchAcceptAppointment: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        },
        fetchAcceptAppointmentSuccess: (state, action) => {
            state.loading = false,
                state.error = false,
                state.success = true;
            state.userData = action.payload;
        },
        fetchAcceptAppointmentFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
fetchAcceptAppointment,fetchAcceptAppointmentFailure,fetchAcceptAppointmentSuccess
} = acceptAppointmentSlice.actions;