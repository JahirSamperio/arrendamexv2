import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    success: false,
    pendingAppointmentData: []
};

export const pendingAppointmentsSlice = createSlice({
    name: 'pendingAppointmentsSlice',
    initialState,
    reducers: {
        fetchGetPendingAppointments: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        },
        fetchGetPendingAppointmentsSuccess: (state, action) => {
            state.loading = null,
                state.error = null,
                state.success = true;
            state.pendingAppointmentData = action.payload;
        },
        fetchGetPendingAppointmentsFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
    fetchGetPendingAppointments,fetchGetPendingAppointmentsFailure,fetchGetPendingAppointmentsSuccess
} =pendingAppointmentsSlice.actions;