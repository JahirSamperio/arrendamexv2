import { combineReducers } from "redux";


import { pendingAppointmentsSlice } from "./pendingAppointmentsSlice";
import { getRequestedAppointmentSlice } from "./getRequestedAppointmentSlice";
import { getAceptedAppoSlice } from "./getAceptedAppoSlice";
import { acceptAppointmentSlice } from "./acceptAppointmentSlice";
import { deleteAppointmentSlice } from "./deleteAppointmentSlice";
import {requestAppointmentSlice} from './requestAppoinmentSlice'

export * from './pendingAppointmentsSlice'
export * from './getRequestedAppointmentSlice'
export * from './getAceptedAppoSlice'
export * from './acceptAppointmentSlice'
export * from './deleteAppointmentSlice'
export * from './requestAppoinmentSlice'


export  const AppointmentsReducers = combineReducers({
    
    pending: pendingAppointmentsSlice.reducer,
    requested: getRequestedAppointmentSlice.reducer,
    accepted: getAceptedAppoSlice.reducer,
    ok: acceptAppointmentSlice.reducer,
    cancel: deleteAppointmentSlice.reducer,
    request: requestAppointmentSlice.reducer,
})