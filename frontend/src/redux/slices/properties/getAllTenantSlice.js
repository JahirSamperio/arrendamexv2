import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    success: false,
    tenantsData: []
};

export const getAllTenantSlice = createSlice({
    name: 'getAllTenantSlice',
    initialState,
    reducers: {
        fetchGetAllTenant: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        },
        fetchGetAllTenantSuccess: (state, action) => {
            state.loading = null,
                state.error = null,
                state.success = true;
            state.tenantsData = action.payload;
        },
        fetchGetAllTenantFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
    fetchGetAllTenant,fetchGetAllTenantFailure,fetchGetAllTenantSuccess
} = getAllTenantSlice.actions;