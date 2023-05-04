import axios from 'axios';
import {
    fetchRequestAppointmentFailure,fetchRequestAppointmentSuccess,fetchrequestAppointment
} from "../../slices/appointments/requestAppoinmentSlice";

export const requestAppointment = (datos) => async (dispatch) => {


    try {

        dispatch(fetchrequestAppointment());
        console.log(datos);
        const {data} = await axios.post('http://localhost:3000/citas/sendcita', datos);
        console.log(data.response);
        dispatch(fetchRequestAppointmentSuccess(data.response));

    } catch (error) {
        dispatch(fetchRequestAppointmentFailure("Error al aceptar la cita"));
    }
}