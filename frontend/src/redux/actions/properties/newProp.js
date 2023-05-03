import axios from 'axios';
import { fetchNewProp,fetchNewPropFailure,fetchNewPropSuccess } from '../../slices/properties/newPropSlice';

export const newProp = (data) => async (dispatch) => {

    console.log(data);
    const userID = localStorage.getItem('id');
    try {
        dispatch(fetchNewProp());
        const response = await axios.post(`http://localhost:3000/inmueble/newInmueble?id_usuario=${userID}`, data);
        console.log(response);
        dispatch(fetchNewPropSuccess(true));
    } catch (error) {
        dispatch(fetchNewPropFailure(error));
    }


}