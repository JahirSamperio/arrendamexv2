import axios from 'axios';
import { fetchGetPendingPayment,fetchGetPendingPaymentFailure,fetchGetPendingPaymentSuccess } from '../../slices/dates/getPendingPaymentSlice';

export const getPendingPayment = () => async (dispatch) => {
    
    const userID = localStorage.getItem('id');

    try {

        dispatch(fetchGetPendingPayment());
        const {data} = await axios.get(`http://localhost:3000/fechas/pendingpayments?id_usuario=${userID}`);
        dispatch(fetchGetPendingPaymentSuccess(data.response));

    } catch (error) {
        dispatch(fetchGetPendingPaymentFailure("Error al obtener los pagos pendientes"));
    }
}