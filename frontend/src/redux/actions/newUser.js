import axios from 'axios';
import {
    fetchNewUser,
    fetchNewUserSuccess,
    fetchNewFailure
} from "../slices/users/newUserSlice";

export const newUser = (dataForm) => async (dispatch) => {
    console.log(dataForm);

    try {

        dispatch(fetchNewUser());
        
        const response= await axios.post('http://localhost:8080/users/newUser', dataForm);

        // dispatch(fetchNewUserSuccess(data.response));
        dispatch(fetchNewUserSuccess(response));

    } catch (error) {

        // const { response } = error;

        // if (response.status = 409) {
        //     dispatch(fetchNewFailure("Ususario ya existente"));
        //     return;
        // }
        // dispatch(fetchNewFailure(error.response.data.msg));
        dispatch(fetchNewFailure(error));
    }
}