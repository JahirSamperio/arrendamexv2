import axios from 'axios';
import { fetchGetPending,fetchGetPendingFailure,fetchGetPendingSuccess } from '../../slices/dates/getPendingSlice';

export const getPendings = () => async (dispatch) => {
    
    const userID = localStorage.getItem('id');

    try {

        dispatch(fetchGetPending());
        
        const {data} = await axios.get(`http://localhost:3000/fechas/todaypayments?id_usuario=${userID}`);
        dispatch(fetchGetPendingSuccess(data.response));

    } catch (error) {
        dispatch(fetchGetPendingFailure("Error al obtener los pagos de hoy"));
    }
}