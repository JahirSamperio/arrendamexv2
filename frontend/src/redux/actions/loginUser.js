import axios from 'axios';
import {
    fetchNewUser,
    fetchNewUserSuccess,
    fetchNewFailure
} from "../slices/users/newUserSlice";


export const loginUser = (data) => async (dispatch) => {

    try {
        dispatch(fetchNewUser());
        const response = await axios.post('http://localhost:8080/log/login', data);
        console.log(response);
        dispatch(fetchNewUserSuccess(response.data.response));
    } catch (error) {
        dispatch(fetchNewFailure("Error al ingresar, el ususario no existe, por favor intente nuevamente"));
    }
}