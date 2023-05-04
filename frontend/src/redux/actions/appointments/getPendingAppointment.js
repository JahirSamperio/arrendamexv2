import axios from 'axios';
import {  fetchGetPendingAppointments,fetchGetPendingAppointmentsFailure,fetchGetPendingAppointmentsSuccess} from '../../slices/appointments/pendingAppointmentsSlice';

export const getPendingAppointment = () => async (dispatch) => {
    
    const userID = localStorage.getItem('id');

    try {

        dispatch(fetchGetPendingAppointments());
        
        const {data} = await axios.get(`http://localhost:3000/citas/numpendientes?id_usuario=${userID}`);
        dispatch(fetchGetPendingAppointmentsSuccess(data.response));

    } catch (error) {
        dispatch(fetchGetPendingAppointmentsFailure("Error al obtener los pagos de hoy"));
    }
}