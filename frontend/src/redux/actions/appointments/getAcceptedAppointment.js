import axios from 'axios';
import {  fetchGetAceptedAppo,fetchGetAceptedAppoFailure,fetchGetAceptedAppoSuccess} from '../../slices/appointments/getAceptedAppoSlice';

export const getAcceptedAppointment = () => async (dispatch) => {
    
    const userID = localStorage.getItem('id');

    try {

        dispatch(fetchGetAceptedAppo());
        
        const {data} = await axios.get(`http://localhost:3000/citas/getcitaaceptada?id_usuario=${userID}`);
        dispatch(fetchGetAceptedAppoSuccess(data.response));

    } catch (error) {
        dispatch(fetchGetAceptedAppoFailure("Error al obtener citas agendadas"));
    }
}