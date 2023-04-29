import { combineReducers } from "redux";

import { getAllPropsSlice } from "./getAllPropsSlice";
import { getRentalViewProps } from "./getRentalViewPropsSlice";
// import { getUserInformationSlice } from "./informationUserSlice";
// import { editUserSlice } from "./editUserSlice";


export * from './getAllPropsSlice';
export * from './getRentalViewPropsSlice'
// export * from './informationUserSlice';
// export * from './editUserSlice';

export const PropertiesReducer = combineReducers({
    getAll: getAllPropsSlice.reducer,
    getById: getRentalViewProps.reducer,
    // edit: editUserSlice.reducer,
    // information: getUserInformationSlice.reducer
});