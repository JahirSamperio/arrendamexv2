import axios from 'axios';
import {
    fetchNewUser,
    fetchNewUserSuccess,
    fetchNewFailure
} from "../slices/users/newUserSlice";


export const loginUser = (data) => async (dispatch) => {

    try {
        dispatch(fetchNewUser());
        const {data} = await axios.get('http://localhost:3000/log/login', data);
        console.log(data.response);
        dispatch(fetchNewUserSuccess(data.response));
    } catch (error) {
        dispatch(fetchNewFailure("Error, información no encontrada.Intente de nuevo"));
    }
}