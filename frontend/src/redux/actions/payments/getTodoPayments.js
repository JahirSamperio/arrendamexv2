import axios from 'axios';
import { fetchGetToDoPayment,fetchGetToDoPaymentFailure,fetchGetToDoPaymentSuccess} from '../../slices/payment/paymentsToDoSlice';

export const getTodoPayments = () => async (dispatch) => {
    
    const userID = localStorage.getItem('id');

    try {

        dispatch(fetchGetToDoPayment());
        
        
        const {data} = await axios.get(`http://localhost:3000/arrendamientos/getAll?id_usuario=${userID}`);
        dispatch(fetchGetToDoPaymentSuccess(data.response));

    } catch (error) {
        dispatch(fetchGetToDoPaymentFailure("Error al obtener los ultimos pagos"));
    }
}