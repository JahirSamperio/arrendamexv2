import axios from 'axios';
import { fetchGetLastPayments,fetchGetLastPaymentsFailure,fetchGetLastPaymentsSuccess } from '../../slices/dates/getLastPaymentSlice';

export const getLastPayments = () => async (dispatch) => {
    
    const userID = localStorage.getItem('id');

    try {

        dispatch(fetchGetLastPayments());
        
        const {data} = await axios.get(`http://localhost:3000/fechas/lastpayments?id_usuario=${userID}`);
        dispatch(fetchGetLastPaymentsSuccess(data.response));

    } catch (error) {
        dispatch(fetchGetLastPaymentsFailure("Error al obtener los ultimos pagos"));
    }
}