import axios from 'axios';
import { fetchLoginUser,fetchLoginFailure, fetchLoginSuccess } from '../../slices/users/loginUserSlice';


export const loginUser = (dataLogin) => async (dispatch) => {
    

    try {
        dispatch(fetchLoginUser());
        const {data} = await axios.post('http://localhost:3000/log/login',dataLogin);
        console.log(data.response);
        dispatch(fetchLoginSuccess(data.response));
    } catch (error) {
        console.log(error);
        dispatch(fetchLoginFailure("Error, información no encontrada.Intente de nuevo"));
    }
}