import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    success: false,
    dAData: {}
};

export const deleteAppointmentSlice = createSlice({
    name: 'deleteAppointmentSlice',
    initialState,
    reducers: {
        fetchDeleteAppointment: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        },
        fetchDeleteAppointmentSuccess: (state, action) => {
            state.loading = false,
                state.error = false,
                state.success = true;
            state.dAData = action.payload;
        },
        fetchDeleteAppointmentFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
    fetchDeleteAppointment,fetchDeleteAppointmentFailure
    ,fetchDeleteAppointmentSuccess
} = deleteAppointmentSlice.actions;