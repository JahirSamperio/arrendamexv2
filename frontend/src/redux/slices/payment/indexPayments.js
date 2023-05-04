import { combineReducers } from "redux";

import { paymentSlice} from "./paymentSlice";


export * from './paymentSlice';



export const PaymentsReducers = combineReducers({
    pay: paymentSlice.reducer,

});