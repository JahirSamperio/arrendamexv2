import { combineReducers } from "redux";


import { pendingAppointmentsSlice } from "./pendingAppointmentsSlice";


export * from './pendingAppointmentsSlice'


export  const AppointmentsReducers = combineReducers({
    
    pending: pendingAppointmentsSlice.reducer,

})