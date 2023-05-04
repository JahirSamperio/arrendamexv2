import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    success: false,
    aceptAData: []
};

export const getAceptedAppoSlice = createSlice({
    name: 'getAceptedAppoSlice',
    initialState,
    reducers: {
        fetchGetAceptedAppo: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        },
        fetchGetAceptedAppoSuccess: (state, action) => {
            state.loading = null,
                state.error = null,
                state.success = true;
            state.aceptAData = action.payload;
        },
        fetchGetAceptedAppoFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
    fetchGetAceptedAppo,fetchGetAceptedAppoFailure,fetchGetAceptedAppoSuccess
} =getAceptedAppoSlice.actions;