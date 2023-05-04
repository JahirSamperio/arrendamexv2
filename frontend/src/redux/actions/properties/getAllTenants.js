import axios from 'axios';
import { fetchGetAllTenant,fetchGetAllTenantFailure,fetchGetAllTenantSuccess } from '../../slices/properties/getAllTenantSlice';

export const getLastPayments = () => async (dispatch) => {
    
    const userID = localStorage.getItem('id');

    try {

        dispatch(fetchGetAllTenant());
        
        const {data} = await axios.get(`http://localhost:3000/inmueble/allarrendatarios?id_usuario=${userID}`);
        dispatch(fetchGetAllTenantSuccess(data.response));

    } catch (error) {
        dispatch(fetchGetAllTenantFailure("Error al obtener los ultimos pagos"));
    }
}