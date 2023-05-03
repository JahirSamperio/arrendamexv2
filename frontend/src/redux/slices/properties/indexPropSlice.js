import { combineReducers } from "redux";

import { getAllPropsSlice } from "../properties/getAllPropsSlice";
import { getRentalViewProps } from "../properties/getRentalViewPropsSlice";
import { newPropSlice } from "../properties/newPropSlice";
// import { getUserInformationSlice } from "./informationUserSlice";
// import { editUserSlice } from "./editUserSlice";


export * from '../properties/getAllPropsSlice';
export * from '../properties/getRentalViewPropsSlice'
export * from '../properties/newPropSlice'
// export * from './informationUserSlice';
// export * from './editUserSlice';

export const PropertiesReducer = combineReducers({
    getAll: getAllPropsSlice.reducer,
    getById: getRentalViewProps.reducer,
    new: newPropSlice.reducer
    // edit: editUserSlice.reducer,
    // information: getUserInformationSlice.reducer
});