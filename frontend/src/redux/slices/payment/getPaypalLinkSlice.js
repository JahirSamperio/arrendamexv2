import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    success: false,
    linkData: {}
};

export const getPaypalLinkSlice = createSlice({
    name: 'getPaypalLinkSlice',
    initialState,
    reducers: {
        fetchGetPaypalLink: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        },
        fetchGetPaypalLinkSuccess: (state, action) => {
            state.loading = null,
                state.error = null,
                state.success = true;
            state.linkData = action.payload;
        },
        fetchGetPaypalLinkFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
    fetchGetPaypalLink,fetchGetPaypalLinkFailure,fetchGetPaypalLinkSuccess
} = getPaypalLinkSlice.actions;