import { combineReducers } from "redux";

import { newUserSlice } from "./newUserSlice";
import { loginUserSlice } from "./loginUserSlice";
// import { getUserInformationSlice } from "./informationUserSlice";
// import { editUserSlice } from "./editUserSlice";


export * from './newUserSlice';
export * from './loginUserSlice';
// export * from './informationUserSlice';
// export * from './editUserSlice';

export const UsersReducer = combineReducers({
    new: newUserSlice.reducer,
    login:  loginUserSlice.reducer
    // edit: editUserSlice.reducer,
    // information: getUserInformationSlice.reducer
});