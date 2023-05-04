import { combineReducers } from "redux";

import { getTodayPaymentSlice } from "./getTodayPaymentSlice";
import { getLastPaymentSlice } from "./getLastPaymentSlice";
import { getPendingSlice } from "./getPendingSlice";
import { getMonthPaymentSlice } from "./getMonthPaymentSlice";
import { getPendingPaymentSlice } from "./getPendingPaymentSlice";

export * from './getLastPaymentSlice';
export * from './getTodayPaymentSlice';
export * from './getPendingSlice';
export * from './getMonthPaymentSlice'
export * from './getPendingPaymentSlice'

export const DatesReducer = combineReducers({
    todayPayment: getTodayPaymentSlice.reducer,
    lastPayments: getLastPaymentSlice.reducer,
    pending: getPendingSlice.reducer,
    monthPayments: getMonthPaymentSlice.reducer,
    pendingPayments: getPendingPaymentSlice.reducer,
});