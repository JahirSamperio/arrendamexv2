import { combineReducers } from "redux";

import { newUserSlice } from "../users/newUserSlice";
import { loginUserSlice } from "../users/loginUserSlice";
// import { getUserInformationSlice } from "./informationUserSlice";
// import { editUserSlice } from "./editUserSlice";


export * from '../users/newUserSlice';
export * from '../users/loginUserSlice';
// export * from './informationUserSlice';
// export * from './editUserSlice';

export const UsersReducer = combineReducers({
    new: newUserSlice.reducer,
    login:  loginUserSlice.reducer
    // edit: editUserSlice.reducer,
    // information: getUserInformationSlice.reducer
});