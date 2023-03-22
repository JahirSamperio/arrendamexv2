import axios from 'axios';
import {
    fetchNewUser,
    fetchNewUserSuccess,
    fetchNewFailure
} from "../slices/users/newUserSlice";

export const login = (dataForm) => async (dispatch) => {
    console.log(dataForm);

    try {

        dispatch(fetchNewUser());
        
        const response = await axios.post('http://localhost:8080/users/newUser', dataForm);
        dispatch(fetchNewUserSuccess(response));

    } catch (error) {
        dispatch(fetchNewFailure(error));
    }
}