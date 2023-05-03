import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    success: false,
    propData: {}
};

export const newPropSlice = createSlice({
    name: 'newPropSlice',
    initialState,
    reducers: {
        fetchNewProp: (state, action) => {
            state.loading = true;
    state.error = null;
    state.success = null;
        },
        fetchNewPropSuccess: (state, action) => {
            state.loading = false,
            state.error = false,
            state.success = true;
        state.propData = action.payload;
        },
        fetchNewPropFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        },
        resetDataNewPropProcess: (state, action) => {
            state.loading = null
            state.error = null
            state.success = null
        }
    }
});


export const {
    fetchNewPropSuccess,
    fetchNewProp,
    fetchNewPropFailure,
    resetDataNewPropProcess
} = newPropSlice.actions;