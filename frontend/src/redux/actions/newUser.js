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
        
        const {data} = await axios.post('http://localhost:3000/users/newUser', dataForm);
        console.log(data.response);
        dispatch(fetchNewUserSuccess(data.response));

    } catch (error) {
        dispatch(fetchNewFailure("Error al crear el nuevo ususario"));
    }
}