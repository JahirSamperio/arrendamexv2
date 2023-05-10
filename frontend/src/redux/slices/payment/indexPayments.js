import { combineReducers } from "redux";

import { paymentSlice} from "./paymentSlice";
import { paymentToDoSlice } from "./paymentsToDoSlice";
import { getPaypalLinkSlice } from "./getPaypalLinkSlice";

export * from './paymentSlice';
export * from './paymentsToDoSlice';
export * from './getPaypalLinkSlice'

export const PaymentsReducers = combineReducers({
    pay: paymentSlice.reducer,
    todo: paymentToDoSlice.reducer,
    create: getPaypalLinkSlice.reducer,
});