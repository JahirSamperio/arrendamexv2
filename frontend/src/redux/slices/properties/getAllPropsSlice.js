import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    success: false,
    propData: []
};

export const getAllPropsSlice = createSlice({
    name: 'GetAllPropsSlice',
    initialState,
    reducers: {
        fetchGetAllProps: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        },
        fetchGetAllPropsSuccess: (state, action) => {
            state.loading = null,
                state.error = null,
                state.success = true;
            state.propData = action.payload;
        },
        fetchGetAllPropsFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
    fetchGetAllProps,
    fetchGetAllPropsSuccess,
    fetchGetAllPropsFailure
} = getAllPropsSlice.actions;