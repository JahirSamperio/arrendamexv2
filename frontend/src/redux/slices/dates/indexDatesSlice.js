import { combineReducers } from "redux";

import { getDateSlice } from "../dates/getDateSlice";




export * from '../dates/getDateSlice';

export const PropertiesReducer = combineReducers({
    get: getDateSlice.reducer,
});