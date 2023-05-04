import axios from 'axios';
import { fetchGetPropInfoFailure,fetchGetPropInfoSuccess,fetchGetPropInfo } from '../../slices/properties/getPropInfoSlice';

export const getPropInfo = () => async (dispatch) => {
    
    const userID = localStorage.getItem('id');

    try {

        dispatch(fetchGetPropInfo());
        
        const {data} = await axios.get(`http://localhost:3000/inmueble/getInmuebleById?id_usuario=${userID}`);
        dispatch(fetchGetPropInfoSuccess(data.response));

    } catch (error) {
        dispatch(fetchGetPropInfoFailure("Error al obtener la info del inmueble"));
    }
}