import axios from 'axios';
import {
    fetchEditUser,
    fetchEditUserFailure,
    fetchEditUserSuccess
} from "../../slices/users/editUserSlice";

export const editUser = (editForm) => async (dispatch) => {
    console.log(editForm);

    try {

        dispatch(fetchEditUser());
        
        const {data} = await axios.post('http://localhost:3000/', editForm);
        console.log(data.response);
        dispatch(fetchEditUserSuccess(data.response));

    } catch (error) {
        dispatch(fetchEditUserFailure("Error, no se pudo actualizar la informacion usuario"));
    }
}