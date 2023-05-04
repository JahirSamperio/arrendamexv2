import axios from 'axios';
import { fetchGetPendingPayment,fetchGetPendingPaymentFailure,fetchGetPendingPaymentSuccess } from '../../slices/dates/getPendingPaymentSlice';

export const getPendingPayments = () => async (dispatch) => {
    
    const userID = localStorage.getItem('id');

    try {

        dispatch(fetchGetPendingPayment());
        
        const {data} = await axios.get(`http://localhost:3000/fechas/pendingpayments?id_usuario=${userID}`);
        dispatch(fetchGetPendingPaymentSuccess(data.response));

    } catch (error) {
        dispatch(fetchGetPendingPaymentFailure("Error al obtener los ultimos pagos"));
    }
}