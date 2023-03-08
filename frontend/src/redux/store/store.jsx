import {combineReducers,configureStore} from '@reduxjs/toolkit';
import {UsersReducer } from '../slices/users/indexUser';


const combineReducer = combineReducers({
        users: UsersReducer,
});

const rootReducer = (state,action) =>{
    return combineReducer(state,action);
}

export const store = configureStore({
    reducer: rootReducer,
})