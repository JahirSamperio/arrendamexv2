import axios from 'axios';
import { fetchGetDate,fetchGetDateFailure,fetchGetDateSuccess } from '../../slices/dates/getDateSlice';

export const getTodayPayments = () => async (dispatch) => {
    
    const userID = localStorage.getItem('id');

    try {

        dispatch(fetchGetDate());
        
        const {data} = await axios.get(`http://localhost:3000/fechas/todaypayments?id_usuario=${userID}`);
        console.log(data.response);
        dispatch(fetchGetDateSuccess(data.response));

    } catch (error) {
        dispatch(fetchGetDateFailure("Error al obtener inmuebles"));
    }
}