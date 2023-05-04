import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    success: false,
    propInfoData: []
};

export const getPropInfoSlice = createSlice({
    name: 'getPropInfoSlice',
    initialState,
    reducers: {
        fetchGetPropInfo: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        },
        fetchGetPropInfoSuccess: (state, action) => {
            state.loading = null,
                state.error = null,
                state.success = true;
            state.propInfoData = action.payload;
        },
        fetchGetPropInfoFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
    fetchGetPropInfoFailure,fetchGetPropInfoSuccess,fetchGetPropInfo
} = getPropInfoSlice.actions;