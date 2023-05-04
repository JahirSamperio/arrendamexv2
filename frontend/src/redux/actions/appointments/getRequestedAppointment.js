import axios from 'axios';
import {  fetchGetRequestedAppointment,fetchGetRequestedAppointmentFailure,fetchGetRequestedAppointmentSuccess} from '../../slices/appointments/getRequestedAppointmentSlice';

export const getPendingAppointment = () => async (dispatch) => {
    
    const userID = localStorage.getItem('id');

    try {

        dispatch(fetchGetRequestedAppointment());
        
        const {data} = await axios.get(`http://localhost:3000/citas/getcita?id_usuario=${userID}`);
        console.log(data.response)
        dispatch(fetchGetRequestedAppointmentSuccess(data.response));

    } catch (error) {
        dispatch(fetchGetRequestedAppointmentFailure("Error al obtener citas"));
    }
}