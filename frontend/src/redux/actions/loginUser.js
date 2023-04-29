import axios from 'axios';
import { fetchLoginUser,fetchLoginFailure,fetchLoginUserSuccess } from '../slices/users/loginUserSlice';


export const loginUser = () => async (dispatch) => {
    

    try {
        dispatch(fetchLoginUser());
        const {data} = await axios.get('http://localhost:3000/log/login');
        console.log(data.response);
        dispatch(fetchLoginUserSuccess(data.response));
    } catch (error) {
        console.log(error);
        dispatch(fetchLoginFailure("Error, información no encontrada.Intente de nuevo"));
    }
}