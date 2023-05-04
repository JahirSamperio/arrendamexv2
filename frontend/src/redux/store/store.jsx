import {combineReducers,configureStore} from '@reduxjs/toolkit';
import {UsersReducer } from '../slices/users/indexUser';
import { PropertiesReducer } from '../slices/properties/indexPropSlice';
import { DatesReducer } from '../slices/dates/indexDatesSlice';
import { AppointmentsReducers } from '../slices/appointments/indexAppointmentsSlice';
import { PaymentsReducers } from '../slices/payment/indexPayments';

const combineReducer = combineReducers({
        users: UsersReducer,
        properties: PropertiesReducer,
        dates: DatesReducer,
        appointments:AppointmentsReducers,
        payments: PaymentsReducers,
});

const rootReducer = (state,action) =>{
    return combineReducer(state,action);
    
}

export const store = configureStore({
    reducer: rootReducer,
})