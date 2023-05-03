import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    success: false,
    rentalViewData: {}
};

export const getRentalViewProps = createSlice({
    name: 'getRentalViewProps',
    initialState,
    reducers: {
        fetchGetRentalViewProp: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        },
        fetchGetRentalViewPropSuccess: (state, action) => {
            state.loading = null,
                state.error = null,
                state.success = true;
            state.rentalViewData = action.payload;
        },
        fetchGetRentalViewPropFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
    fetchGetRentalViewProp,
    fetchGetRentalViewPropFailure,
    fetchGetRentalViewPropSuccess
} = getRentalViewProps.actions;