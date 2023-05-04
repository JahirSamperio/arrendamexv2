import axios from 'axios';
import { fetchGetTodayPaymentDate,fetchGetTodayPaymentFailure,fetchGetTodayPaymentSuccess } from '../../slices/dates/getTodayPaymentSlice';

export const getTodayPayments = () => async (dispatch) => {
    
    const userID = localStorage.getItem('id');

    try {

        dispatch(fetchGetTodayPaymentDate());
        
        const {data} = await axios.get(`http://localhost:3000/fechas/todaypayments?id_usuario=${userID}`);
        console.log(data.response);
        dispatch(fetchGetTodayPaymentSuccess(data.response));

    } catch (error) {
        dispatch(fetchGetTodayPaymentFailure("Error al obtener los pagos de hoy"));
    }
}