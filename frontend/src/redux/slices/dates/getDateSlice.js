import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    success: false,
    dateData: []
};

export const getDateSlice = createSlice({
    name: 'getDateSlice',
    initialState,
    reducers: {
        fetchGetDate: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        },
        fetchGetDateSuccess: (state, action) => {
            state.loading = null,
                state.error = null,
                state.success = true;
            state.dateData = action.payload;
        },
        fetchGetDateFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
    fetchGetDate,fetchGetDateFailure,fetchGetDateSuccess
} = getDateSlice.actions;