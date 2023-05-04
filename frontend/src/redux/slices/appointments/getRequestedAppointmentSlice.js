import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    success: false,
    requestedAData: []
};

export const getRequestedAppointmentSlice = createSlice({
    name: 'getRequestedAppointmentSlice',
    initialState,
    reducers: {
        fetchGetRequestedAppointment: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        },
        fetchGetRequestedAppointmentSuccess: (state, action) => {
            state.loading = null,
                state.error = null,
                state.success = true;
            state.requestedAData = action.payload;
        },
        fetchGetRequestedAppointmentFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
    fetchGetRequestedAppointmentSuccess,fetchGetRequestedAppointment,fetchGetRequestedAppointmentFailure
} =getRequestedAppointmentSlice.actions;