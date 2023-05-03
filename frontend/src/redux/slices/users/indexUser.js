import { combineReducers } from "redux";

import { newUserSlice } from "../users/newUserSlice";
import { loginUserSlice } from "../users/loginUserSlice";
import { editUserSlice } from "../users/editUserSlice";



export * from '../users/newUserSlice';
export * from '../users/loginUserSlice';
export * from '../users/editUserSlice'


export const UsersReducer = combineReducers({
    new: newUserSlice.reducer,
    login:  loginUserSlice.reducer,
    edit: editUserSlice.reducer,

});