import {combineReducers,configureStore} from '@reduxjs/toolkit';
import {UsersReducer } from '../slices/users/indexUser';
import { PropertiesReducer } from '../slices/properties/indexPropSlice';

const combineReducer = combineReducers({
        users: UsersReducer,
        properties: PropertiesReducer,
        
});

const rootReducer = (state,action) =>{
    return combineReducer(state,action);
    
}

export const store = configureStore({
    reducer: rootReducer,
})